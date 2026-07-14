# Tutorial: Create a Portal

**Tools Used**: High Fidelity, JavaScript, JSDoc, Markdown, GitHub Pages

---

### Overview

For this project, I developed a tutorial to instruct our users how to achieve advanced functionality with High Fidelity's open source platform using scripting. Specifically, this tutorial walks someone through the creation of an object, then scripts its behavior to transport an avatar to another location in the metaverse.

The goal of this project (and its accompanying tutorials) is to educate users on the immense functionality that the JavaScript API provides. Here, I break down an advanced feature to its simplest parts so that creators with basic scripting knowledge can learn from the samples and develop their own functionality through scripting. 

---

<blockquote>

## Sample Tutorial: Create a Portal

Portals in High Fidelity transport you to the domain of your choice. You can use these portals to travel to a domain you visit frequently instead of using the GoTo app on your HUD or Tablet.

To create a portal, you will need to:

- [Create Your Portal Entity](#create)
- [Write a Script](#script)
- [Connect the Script to Your Entity](#connect)

<a class="anchor" id="create" />
<h3 style={{ margin: '10px 0', fontSize: '14pt', color: '#205d3b' }}> Create Your Portal Entity</h3>

First, you need to create a portal using entities. For simple portals like doors or holes in the ground, you can get away with using cube or spherical entities that are included with the basic create tools in High Fidelity. However, you can make them as complex as you like by creating and importing a 3D model into your domain.

No matter what type of entity you use, it must be collisionless. This lets avatars walk into the portal, and trigger the script to teleport to a new location.

1. Create an entity to be used as a portal.
2. Go to the **Properties** tab and scroll down to the **Behavior** section.
3. Add ``hifi://welcome`` (or the destination of your choice) to the **User Data** field.
3. Scroll down to the **Collision** section and uncheck **Collides**. By turning off collisions, avatars can walk into the entity and trigger the script.

<a class="anchor" id="script" />
<h3 style={{ margin: '10px 0', fontSize: '14pt', color: '#205d3b' }}>Write a Script</h3>

In order to work correctly, you must write a script that defines what happens when an avatar walks into your portal. This script will be a client entity script, meaning that it is attached to an entity and will run separately for each avatar (or client) that walks into it.

Your script will do the following:

- Monitor activity to determine when an avatar walks into the portal
- Set a teleport destination
- Play a sound that is played each time an avatar enters the portal
- Teleport avatars to the specified destination

Here is an example script written in JavaScript:

```javascript
(function() {
    var TELEPORT_SOUND_VOLUME = 0.40;
 
    var teleportSound;
    var portalDestination;
    var position;
    var canTeleport;
 
    function playSound(entityID) {
        if (teleportSound.downloaded) {
            if (!position) {
                getProps(entityID);
            }
            Audio.playSound(teleportSound, { position: position,
                volume: TELEPORT_SOUND_VOLUME, localOnly: true });
        }
    }
 
    function getProps(entityID) {
        var properties = Entities.getEntityProperties(entityID);
        if (properties) {
            position = properties.position;
            portalDestination = properties.userData;
        }
    }
 
    function isPositionInsideBox(position, boxProperties) {
        var localPosition = Vec3.multiplyQbyV(Quat.inverse(boxProperties.rotation),
            Vec3.subtract(MyAvatar.position, boxProperties.position));
        var halfDimensions = Vec3.multiply(boxProperties.dimensions, 0.5);
        return -halfDimensions.x <= localPosition.x &&
            halfDimensions.x >= localPosition.x &&
            -halfDimensions.y <= localPosition.y &&
            halfDimensions.y >= localPosition.y &&
            -halfDimensions.z <= localPosition.z &&
            halfDimensions.z >= localPosition.z;
    }
 
    this.preload = function(entityID) {
        print("loading teleport script");
        teleportSound = SoundCache.getSound("http://website.com/teleport.raw");
        getProps(entityID);
        // check if we are already in the object
        canTeleport = !isPositionInsideBox(MyAvatar.position,
            Entities.getEntityProperties(entityID));
    };
 
    this.enterEntity = function(entityID) {
        // check if we should teleport
        if (canTeleport === false) {
            // if we have not passed enough time, do not teleport the user
            return;
        }
        // get the latest properties in case we changed the destination
        getProps(entityID);
 
        if (portalDestination.length > 0) {
            playSound(entityID);
            Window.location = "hifi://" + portalDestination;
        }
 
    };
 
    this.leaveEntity = function(entityID) {
        // we can set canTeleport to true since they are not in the teleporter anymore
        canTeleport = true;
    };
});
```

To write this script, we use these namespaces and functions from our JavaScript API:

**Entities.getEntityProperties Method**

Each entity has a set of properties that defines its appearance and behavior, such as its type, color, position, and rotation. Throughout this script, we will use the ``Entities.getEntityProperties`` method to:

- Track the position of the avatar so that we know when it enters the portal
- Read in the teleport destination from the ‘User Data’ field

```javascript
function getProps(entityID) {
   var properties = Entities.getEntityProperties(entityID);
   if (properties) {
       position = properties.position;
       portalDestination = properties.userData;
   }
}
```

**Vec3 Namespace**

The ``Vec3`` namespace defines the 3D coordinate space that High Fidelity uses in its domain. With it, you can calculate the position of an entity, avatar, or other object in a domain. Here, we used the namespace to determine whether a set of coordinates is inside the portal.

```javascript
function isPositionInsideBox(position, boxProperties) {
   var localPosition = Vec3.multiplyQbyV(Quat.inverse(boxProperties.rotation),
       Vec3.subtract(MyAvatar.position, boxProperties.position));
   var halfDimensions = Vec3.multiply(boxProperties.dimensions, 0.5);
   return -halfDimensions.x <= localPosition.x &&
       halfDimensions.x >= localPosition.x &&
       -halfDimensions.y <= localPosition.y &&
       halfDimensions.y >= localPosition.y &&
       -halfDimensions.z <= localPosition.z &&
       halfDimensions.z >= localPosition.z;
}
```

**Entities.enterEntities Signal**

The ``Entities.enterEntity`` signal is triggered whenever an avatar enters the same location as an entity. In this script, we use this signal to teleport the avatar and play a sound when it enters the portal.

```javascript
this.enterEntity = function(entityID) {
     playSound(entityID);
     Window.location = "hifi://" + portalDestination;
}
```

**Audio.playSound Method**

The ``Audio.playSound`` method plays an audio file. You can specify additional options, such as the volume, location of where the sound originates, and whether the sound is broadcast to everyone in the domain. Here, we have created a method that plays a sound when an avatar enters a specific location.

```javascript
var TELEPORT_SOUND_VOLUME = 0.40;
 
var teleportSound;
var position;
 
function playSound(entityID) {
    if (teleportSound.downloaded) {
        Audio.playSound(teleportSound, { position: position, 
     volume: TELEPORT_SOUND_VOLUME, localOnly: true });
    }
}
```

<a class="anchor" id="connect" />
<h3 style={{ margin: '10px 0', fontSize: '14pt', color: '#205d3b' }}>Connect the Script to Your Entity</h3>

Now that you’ve written your script, you will need to attach it to your entity:

1. In the **Create** app, open the **Properties** window.
2. Go to the **Behavior** section, and paste the URL to your script in the **Script** field.
3. Exit the **Create** app.

Now, when you walk into your portal, you will be transported to the destination specified in the **User Data** field of the portal entity.

</blockquote>

---

<a href="./portfolio" class="button button--lg">Back to Portfolio</a>
