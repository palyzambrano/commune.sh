## Introduction

Hi, Developers I have created an open source video calling web app using fine grained reactive Javascript framework SolidJS.

I have used native webrtc for peer-to-peer communication and socketio for signalling remote peer.

## Working

An initiator can generate meet code and send to person who want to connect. 
On the other side person can join the room using the meet code.

## Features
- Toggle your Camera
- Toggle your Microphone
- Display connected persons in room
- Mobile responsive

## Technology and Framework
- SolidJS
- solid-app-router
- solid-icons
- Tailwindcss
- Webrtc
- Socketio

## SolidJS
I have used many features provided by solidjs to create this web-app. Some of the features are:-

### Store
Store provide nested reactivity in solidjs. Store use proxy to track nested reactive data and handles update independently.
I have created Store and added all of the properties inside them which will update independently.

```js
const [store, setStore] = createStore({
    error: null,
    socket: null,
    peer: null,
    currentStream: null,
    currentUser: null,

    remoteStream: null,
    remoteUser: null,
    remoteMuted: false,
    remoteWebCam: true,

    incommingCall: false,
    incommingPayload: null,

    muted: false,
    webCam: true,
  });
```

### Hooks API
In solidjs you can use hook any where in component no restriction like ReactJs.
I have created `useMeet` hook and added all of the store and action there.
`useMeet` handle functionality from  userMedia to call end like:-

- Store creation
- Socket connection
- userMedia access request
- call user
- answer call
- handle microphone
- handle camera
- handle call end
- handle user connect and disconnect in realtime using 
  socketio


### Directives
directive is a syntactic suger over ref. I have created two directive one for video src object handling and another for click outside to close popup and modal.

My video src object handling directive:-

```js
export function getVideoSrc(el, accessor) {
  const mediaStream = accessor();
  if ("srcObject" in el) {
    el.srcObject = mediaStream;
  } else {
    el.src = URL.createObjectURL(mediaStream);
  }
}


```

el contrains dom element and accessor is a function which will return data whatever i have sent from directive in component

In componnet i have used video directive like this:-

```js
 <video
        autoPlay
        controls={false}
        playsInline
        use:getVideoSrc={stream}
      ></video>

```

after use: `getVideoSrc` is a function which provide two argument element and accessor. `stream` i have sent inside directive is accessible by calling accessor function.


### onMount
I have create socket connection and handle userMedia access permission inside onMount. This will run after component render.An in solid js component render only once.


### onCleanup
I have disconnect socket inside onCleanup. This run when our component unmount.

## Incomming features
- multiple person 
- screen sharing
- switch between multiple camera and microphone
- etc...





## Links

[Frontend Code](https://github.com/harshmangalam/solid-meet)
<br/>
[Backend code](https://github.com/harshmangalam/nodejs-meet-server)


 







 