# ionic-letter-avatar-selector  

This plugin provides letter avatars for list items and multiple list item selection similar to the Android gmail app. 
It can be integrated into your ionic 1.x app using the `ion-item` directive. By default the item selection feature is disabled on iOS.

## [Demo](http://app-ionicletteravatarselector.herokuapp.com)  
![animated example](http://i.giphy.com/3o6gbcO6uExMGe2xuE.gif)

## Features 
* letter avatars for ionic list items based on the `ion-item` directive
* multiple selection and deselection of list items by clicking on a letter avatar or long clicking on a list item
* retrieval of selected items
* two buttons for finishing a selection and deleting selected items


## Quick start 
1. Get the files from here or install from bower:

    ```
    bower install ionic-letter-avatar-selector
    ```
    
2. Include the javascript and css files or their minified versions in your `index.html` file.

    ```html
    <link href="style/css/ionic-letter-avatar-selector.min.css" rel="stylesheet">
    <script src="dist/ionic-letter-avatar-selector.min.js"></script>
    ```
    
3. Add the module `ionicLetterAvatarSelector` to your application dependencies:

    ```javascript
    angular.module('starter', ['ionic', 'ionicLetterAvatarSelector'])
    ```
    
4. Add the attribute `letters-of` to the `ion-item` directive for using **only** the letter avatar feature.
For using the item selection feature add the additional attribute `item` and pass an item identifier. 

5. Add the default button directives `ilas-button-finish` and `ilas-button-delete` to your navigation bar.

#### Example *(based on the ionic starter tabs app)*

```html
<ion-view view-title="Chats">
    <ion-nav-buttons side="left">
        <ilas-button-finish></ilas-button-finish>
    </ion-nav-buttons>    
    <ion-nav-buttons side="right">
        <ilas-button-delete ng-click="delete()"></ilas-button-delete>
    </ion-nav-buttons>  
    <ion-content>
        <ion-list>
            <ion-item class="item-remove-animate"
                      letters-of="{{chat.name}}"
                      item="{{chat.id}}"
                      href="#/tab/chats/{{chat.id}}"
                      ng-repeat="chat in chats" >
                <h2>{{chat.name}}</h2>
                <p>{{chat.lastText}}</p>
                <i class="icon ion-chevron-right icon-accessory"></i>
            </ion-item>
        </ion-list>
    </ion-content>
</ion-view>
```

```javascript
angular.module('starter.controllers', [])

// Inject the $ionicLetterAvatarSelector service 
.controller('ChatsCtrl', function($ionicLetterAvatarSelector, $scope, Chats) {
    $scope.delete = function() {
        // Get selected item IDs
        var selectedItems = $ionicLetterAvatarSelector.getData();
        
        //Write your code to delete selected items
        
        // Finish selection
        $ionicLetterAvatarSelector.finish();
    };
});
```

## Configuration provider

In the angular configuration phase you can define global settings for this plugin. For that purpose there is a provider named `$ionicLetterAvatarSelectorConfigProvider`.
The following options can be set in the configuration phase:

option|description|type|accepted values|default value
---|---|---|---|---
background|Background color of letter avatars|string|css color names, hex color codes, ionic color names (e.g. 'positive') and 'random' for random colors|positive
color|Foreground color of letter avatars (text color)|string|css color names, hex color codes and ionic color names|light
border|Border of letter avatars|string|css border values|none
number of letters|number of letters to show inside a letter avatar|number|1-n|the default letter number is detected depending on the word number in a given string
selection on Android|Enabling / disabling selection on Android|boolean|true, false|true
selection on iOS|Enabling / disabling selection on iOS|boolean|true, false|false
selection color|Color of avatars and navigation bar during selection|string|hex color codes|#A8A8A8

#### Example
##### Code

```javascript
angular.module('starter', ['ionic', 'ionicLetterAvatarSelector'])
.config(function($ionicLetterAvatarSelectorConfigProvider) {
    $ionicLetterAvatarSelectorConfigProvider.setBackground('calm');
    $ionicLetterAvatarSelectorConfigProvider.setColor('light');
    $ionicLetterAvatarSelectorConfigProvider.setBorder('1px solid black');
    $ionicLetterAvatarSelectorConfigProvider.setLetters(3);
    $ionicLetterAvatarSelectorConfigProvider.setSelectionAndroid(false);
    $ionicLetterAvatarSelectorConfigProvider.setSelectionIos(true);
    $ionicLetterAvatarSelectorConfigProvider.setSelectionColor('#86b0f9');
});
```

##### Result
![screenshot1](http://fs5.directupload.net/images/160223/r766ommj.png)

## Services

### Service `$ionicLetterAvatarSelector`

Using this service you have access to the following events and methods:

event|description|type|value
---|---|---|---
`started`|Selection started event|string|$ionicLetterAvatarSelector.started
`finished`|Selection finished event|string|$ionicLetterAvatarSelector.finished
`stateChanged`|Selection state event|boolean|`true` if selection is active and `false` if selection is not active

method|description|return-value
---|---|---
`getData()`|Retrieval of selected items|array
`finish()`|Finishing selection|

## Directives
### Extended directive `ion-item`

Add the attribute `letters-of` and `item` to the `ion-item` directive of your list items:

attribute|description
---|---
`letters-of`|String value from which the first letter(s) will be used for building a letter avatar
`item`|Corresponding list item identifier which will be cached during selection

### Note

Leave the `item` attribute out, if you don't want to use the item selection feature. 

The attributes `background`, `color`, `border` and `letters` are optional and can be also set globally in the configuration phase:

#### Example
##### Code

```html
<ion-list>
    <ion-item letters-of="{{chat.name}}"
              item="{{chat.id}}"
              background="random"
              border="none"
              color="white"
              letters="1"
              href="#/tab/chats/{{chat.id}}"
              ng-repeat="chat in chats">
        <h2>{{chat.name}}</h2>
        <p>{{chat.lastText}}</p>
        <i class="icon ion-chevron-right icon-accessory"></i>
    </ion-item>
</ion-list>
```
##### Result

![screenshot2](http://fs5.directupload.net/images/160222/z72w4mqz.png)

### Directive `ilas-button-finish`

You can use this directive to show / hide a button for finishing item selection. The default icons for iOS and Android are `ion-checkmark-empty` and `ion-android-arrow-back`.

#### Example

```html
<ion-nav-bar class="bar-positive">
    <ion-nav-back-button></ion-nav-back-button>
    <ion-nav-buttons side="left">
        <ilas-button-finish></ilas-button-finish>
    </ion-nav-buttons>    
</ion-nav-bar>
```

### Directive `ilas-button-delete`

This directive shows / hides a button for deleting selected items. The default icons for iOS and Android are `ion-ios-trash` and `ion-android-delete`.
Using `ng-click` attribute you can invoke your specific delete function considering the following actions: 

1. In your delete function first get selected item identifiers invoking the `getData()` function of the `$ionicLetterAvatarSelector` service.
2. Write your code for deleting selected items. 
3. Finish selection invoking the `finish()` function of the above-mentioned service.

#### Example

```html
<ion-view view-title="Chats">
    <ion-nav-buttons side="right">
        <ilas-button-delete ng-click="delete()"></ilas-button-delete>
    </ion-nav-buttons>  
</ion-view>
```

```javascript
angular.module('starter.controllers', [])
.controller('ChatsCtrl', function($ionicLetterAvatarSelector, $scope, Chats) {
    $scope.delete = function() {
        var chats = Chats.all();
        
        //1. Getting selected items
        var selectedIDs = $ionicLetterAvatarSelector.getData();
        
        //2. Deleting items
        selectedIDs.forEach(function(id) {
            var chat = chats.filter(function(chat) {
                return chat.id === id;
            })[0];
            chats.splice(chats.indexOf(chat), 1);
        });
        
        //3. Finishing selection
        $ionicLetterAvatarSelector.finish();
    };
})
```

Instead of using this directives you can also add your own buttons and show / hide them depending on the selection state event.

#### Example
##### Code

```html
<ion-view view-title="Chats">
    <ion-nav-buttons side="left">
        <button class="button button-icon icon ion-checkmark-circled" 
                ng-show="selectionActive" 
                ng-click="finish()">
        </button>
    </ion-nav-buttons>  
    <ion-nav-buttons side="right">
        <button class="button button-icon icon ion-trash-b" 
                ng-show="selectionActive" 
                ng-click="delete()">
        </button>
    </ion-nav-buttons>  
    <ion-content>
        <ion-list>
            <ion-item letters-of="{{chat.name}}"
                      item="{{chat.id}}"
                      href="#/tab/chats/{{chat.id}}"
                      ng-repeat="chat in chats" >
                <h2>{{chat.name}}</h2>
                <p>{{chat.lastText}}</p>
                <i class="icon ion-chevron-right icon-accessory"></i>
            </ion-item>
        </ion-list>
    </ion-content>
</ion-view>
```

```javascript
angular.module('starter.controllers', [])
.controller('ChatsCtrl',function($ionicLetterAvatarSelector, $scope, Chats) {
    $scope.$on($ionicLetterAvatarSelector.stateChanged, function($event, selectionActive) {
        $scope.selectionActive = selectionActive;
    });
    
    $scope.finish = $ionicLetterAvatarSelector.finish;
    
    $scope.delete = function() {
        var chats = Chats.all();
        var selectedIDs = $ionicLetterAvatarSelector.getData();
        selectedIDs.forEach(function(id) {
            var chat = chats.filter(function(chat) {
                return chat.id === id;
            })[0];
            chats.splice(chats.indexOf(chat), 1);
        });
        $scope.finish();
    };
});
```

##### Result

![screenshot3](http://fs5.directupload.net/images/160222/m5heu6xg.png)

## Author

☟|☟
---|---
email|ivan.weber@gmx.de
twitter|https://twitter.com/_ivandroid_
github|https://github.com/ivandroid
ionic market|https://market.ionic.io/user/6540

## License

[MIT](https://github.com/ivandroid/ionic-letter-avatar-selector/blob/master/LICENSE)

## Versions

[CHANGELOG](https://github.com/ivandroid/ionic-letter-avatar-selector/blob/master/CHANGELOG.md)