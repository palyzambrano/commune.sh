## Introduction

Network api really shine if you want to show content based on network connection of user. For example you can provide high resolution image if user are connected with high bandwidth or low resolution if not better connection available.


## Solidjs

Solidjs will provide you lightweight reactive environment with extreme speed of web without diffing any Virtual DOM into your web app. Solidjs works on the principle of fine grained reactivity .

We will create a `useNetwork` hook that will take care of registering events on mount related to network status and remove on cleanup.

## Hooks

`useNetwork.jsx`

```js

import { onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";
export default function useNetwork() {

  const [network, setNetwork] = createStore({
    isOnline: true,
    connection: {
      type: null,
      effectiveType: null,
      downlink: null,
      rtt: null,
      saveData: null,
    },
  });

  const handleStatusChange = (e) => {
    const isOnline = e.type === "online";
    setNetwork("isOnline", isOnline);
  };

  const checkNetworkStatus = () => {
    const isOnline = window.navigator.onLine;
    setNetwork("isOnline", isOnline);
  };

  const handleConnectionChange = (event) => {
    const connection = event?.target || window.navigator.connection || {};

    setNetwork("connection", {
      type: connection.type,
      downlink: connection.downlink,
      effectiveType: connection.effectiveType,
      rtt: connection.rtt,
      saveData: connection.saveData,
    });
  };
  onMount(() => {
    checkNetworkStatus();
    if (typeof window.navigator.connection !== "undefined") {
      handleConnectionChange();
      window.navigator.connection.addEventListener(
        "change",
        handleConnectionChange
      );
    }
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);
  });

  onCleanup(() => {
    window.removeEventListener("online", handleStatusChange);
    window.removeEventListener("offline", handleStatusChange);
    if (typeof window.navigator.connection !== "undefined") {
      window.navigator.connection.removeEventListener(
        "change",
        handleConnectionChange
      );
    }
  });

  return {
    network,
  };
}


```


`onMount` and `onCleanup` is a life cycle function in solidjs . `onMount` run when your component mount and `onCleanup` function run when your component unmount.


Here we have created a store using `createStore` function which take initial value and return  a read and write tuple.

`isOnline` field will track the current user network and store boolean value. You can test this by changing network status to `offline` in dev tools > Network.


`type` field contain  the type of connection a device is using to communicate with the network like wifi.

`effectiveType` contain type of network connection like 3g , 4g etc...

`downlink` contain the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.

`rtt` contain the estimated effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds.

`saveData` contain boolean value like  true if the user has set a reduced data usage option on the user agent.

Lets utilise `useNetwork` hook in `App.jsx`. I have added nice UI using Hope UI.

`App.jsx`


```js
import {
  Box,
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressLabel,
  Container,
  GridItem,
  Heading,
  HopeProvider,
  HStack,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@hope-ui/solid";
import ThemeSwitcher from "./components/ThemeSwitcher";
import useNetwork from "./hooks/useNetwork";

function App() {
  const { network } = useNetwork();
  return (
    <HopeProvider config={{ initialColorMode: "dark" }}>
      <Box minH={"100vh"} h="$full" w={"$full"} py="$10">
        <VStack spacing={"$3"}>
          <Heading textAlign={"center"} fontSize={"$6xl"}>
            Network &nbsp;
            <Box as="span" color={"$primary10"}>
              Status
            </Box>
          </Heading>

          <HStack spacing={"$2"}>
            <Tag
              colorScheme={network.isOnline ? "success" : "danger"}
              size={"lg"}
              variant="dot"
              dotPlacement="start"
            >
              <Show when={network.isOnline} fallback="Offline">
                Online
              </Show>
            </Tag>

            <ThemeSwitcher />
          </HStack>
        </VStack>
        <Container mt={"$10"}>
          <SimpleGrid
            w={"$full"}
            columns={{ "@initial": 1, "@sm": 2, "@md": 2, "@xl": 4 }}
            justifyContent="center"
          >
            <GridItem mx={"auto"}>
              <CircularProgress thickness={"$0_5"} size={"$xs"} value={100}>
                <CircularProgressIndicator color={"$warning10"} />
                <CircularProgressLabel>
                  <VStack spacing={"$6"}>
                    <Heading fontSize={"$xl"}> Effective Type</Heading>
                    <Text fontSize={"$xl"}>
                      {network.connection?.effectiveType}
                    </Text>
                  </VStack>
                </CircularProgressLabel>
              </CircularProgress>
            </GridItem>
            <GridItem mx={"auto"}>
              <CircularProgress size={"$xs"} value={100} thickness={"$0_5"}>
                <CircularProgressIndicator color={"$success10"} />
                <CircularProgressLabel>
                  <VStack spacing={"$6"}>
                    <Heading fontSize={"$xl"}> Downlink</Heading>
                    <Text fontSize={"$xl"}>{network.connection.downlink} </Text>
                  </VStack>
                </CircularProgressLabel>
              </CircularProgress>
            </GridItem>

            <GridItem mx={"auto"}>
              <CircularProgress thickness={"$0_5"} size={"$xs"} value={100}>
                <CircularProgressIndicator color={"$primary10"} />
                <CircularProgressLabel>
                  <VStack spacing={"$6"}>
                    <Heading fontSize={"$xl"}> Rtt</Heading>
                    <Text fontSize={"$xl"}>{network.connection.rtt}</Text>
                  </VStack>
                </CircularProgressLabel>
              </CircularProgress>
            </GridItem>
            <GridItem mx={"auto"}>
              <CircularProgress thickness={"$0_5"} size={"$xs"} value={100}>
                <CircularProgressIndicator color={"$whiteAlpha10"} />
                <CircularProgressLabel>
                  <VStack spacing={"$6"}>
                    <Heading fontSize={"$xl"}> Type</Heading>
                    <Text fontSize={"$xl"}>{network.connection?.type}</Text>
                  </VStack>
                </CircularProgressLabel>
              </CircularProgress>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </HopeProvider>
  );
}

export default App;


```


## Links
[Github Repo]( https://github.com/harshmangalam/solid-network-status)

