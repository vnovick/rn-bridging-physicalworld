// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Layout,
  Fill,
  Code,
  Link,
  Image
} from "spectacle";


import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");


const theme = createTheme({
  primary: "#232630",
  secondary: "white",
  tertiary: "aqua",
  quartenary: "#f74c4f"
}, {
  primary: "Roboto",
  secondary: "Helvetica"
});

const images = {
  background: require("../assets/background.jpg"),
  physicalworld: require("../assets/physicalworld.jpg"),
  future: require("../assets/future-city.jpg"),
  connection: require("../assets/iotbackground.jpg"),
  toilet: require("../assets/toilet.jpg"),
  toothbrush: require("../assets/kolibree-smart-toothbrush-xl.jpg"),
  code: require("../assets/code-background.png"),
  cloud: require("../assets/iot-cloud.jpg"),
  network: require("../assets/network.png"),
  bluetooth: require("../assets/bluetooth.png"),
  bleChip: require("../assets/bleChip.png"),
  proximityApi: require("../assets/proximityapi.png"),
  sniffing: require("../assets/ble_sniffing.jpg"),
  hacking: require("../assets/hacking.jpg")
}

const BackgroundSlide = ({ children, ...rest }) => (
  <Slide bgImage={images.background} {...rest} darken={.5}>
    { children }
  </Slide>
)

const bgSlideProps = {
  bgImage: images.background,
  bgDarken: .5
}


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} theme={theme} progress="none" controls={false}>
        <Slide bgColor="primary" bgImage={require("../assets/promo_slide.jpg")}>
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading size={1} fit caps lineHeight={2} textColor="secondary">
            React Native 
          </Heading>
          <Heading size={3} italic lineHeight={1} textColor="tertiary">
            bridging into a physical world
          </Heading>
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading size={3} lineHeight={1} textColor="secondary">
            @VladimirNovick
          </Heading>
          <Text textColor="tertiary">
            vnovick.com
          </Text>
        </Slide>
        <Slide {...bgSlideProps}>
          <Heading size={3} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
        </Slide>
        <Slide bgImage={images.physicalworld} bgDarken={.2}>
          <Heading size={3} lineHeight={1} textColor="secondary">
            How to connect to physical world devices
          </Heading>
        </Slide>
        <Slide bgColor="primary" bgImage={images.future} bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            How the future will look like?
          </Heading>
        </Slide>
        <Slide bgColor="primary" bgImage={images.connection} bgDarken={.4}>
          <Heading size={4} lineHeight={1} textColor="secondary" italic>
            Everything is getting connected
          </Heading>
        </Slide>
        <Slide bgImage={images.connection} bgDarken={.4}>
          <Image width="100%" src={images.toilet}/>
        </Slide>
        <Slide bgImage={images.connection} bgDarken={.4}>
          <Image width="100%" src={images.toothbrush}/>
        </Slide>
        <Slide bgImage={images.connection} bgDarken={.4}>
          <Image width="100%" src={require("../assets/iotfunny1.jpg")}/>
        </Slide>
        <Slide bgImage={images.connection} bgDarken={.4}>
          <Image width="100%" src={require("../assets/future.jpg")}/>
        </Slide>
        <Slide bgImage={images.connection} bgDarken={.4}>
          <Image width="100%" src={require("../assets/iot2.png")}/>
        </Slide>
        <Slide bgImage={images.cloud} bgDarken={.8}>
          <Heading size={3} lineHeight={1} textColor="secondary">
              Devices connected to the Cloud
          </Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} lineHeight={1} textColor="secondary">
              Accessing devices over network
          </Heading>
          <Text size={3} lineHeight={1} textColor="tertiary">
              GraphQL, Async/Await, Fetch
          </Text>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} lineHeight={1} textColor="secondary">
              Bluetooth
          </Heading>
          <Image width="50%" src={images.bluetooth}/>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} lineHeight={1} textColor="secondary">Beacons & BLE</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} lineHeight={1} textColor="secondary">What is a Beacon</Heading>
          <List style={{ listStyle: "none" }}>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Small BLE radio transmitter</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>It transmits at interval of 1/10th of a second</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Can be in Eddystone or in iBeacon formats</Text></ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} lineHeight={1} textColor="secondary">What is BLE</Heading>
          <List style={{ listStyle: "none" }}>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Bluetooth Low Energy is part of Bluetooth 4.0 core</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Low power consumption - running a year on CR2032</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Low bandwidth - 5kb/s</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Low latency - 6 ms</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Discoverable by bluetooth enabled devices</Text></ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} lineHeight={1} textColor="secondary">Terminology</Heading>
          <List style={{ listStyle: "none" }}>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Peripherial - small low power device</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Central - more powerful device</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>GAP - Generic Access Profile</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>GATT - Generic Attribute Profile</Text></ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={4} lineHeight={3} textColor="secondary">GAP - Generic Access Profile</Heading>
          <Text size={3} lineHeight={1} textColor="tertiary" italic>Makes your peripherial visible and determines how devices can interact</Text>
          <Image style={{ marginTop: "2rem"}} src={require("../assets/microcontrollers_Advertising2.png")} />
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={4} lineHeight={3} textColor="secondary">Use GAP for broadcasting</Heading>
          <Text size={3} lineHeight={1} textColor="tertiary" italic>Peripherial sends <span style={{ color: "#f74c4f" }}>31 byte</span> custom data to whoever listens</Text>
          <Image src={require("../assets/microcontrollers_BroadcastTopology.png")} />
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} textColor="secondary">URI beacons</Heading>
          <Heading size={4} textColor="quartenary">Eddystone</Heading>
          <Image src={require("../assets/physical-web.png")}/>
          <Text textColor="secondary">Physical Web</Text>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} textColor="secondary">Eddystone beacons in a nutshell</Heading>
          <Text style={{marginTop: "3rem"}} lineHeight={1} textColor="tertiary" italic>Beacons broadcast URL</Text>
          <Text lineHeight={1} textColor="tertiary" italic>Anyone with <span style={{ color: "#f74c4f" }}>Physical Web compatible service</span> will see this URL</Text>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Layout>
            <Fill>
              <Heading size={6} textColor="secondary">Android</Heading>
              <Image src={require("../assets/androidphysicalweb.jpg")} width="100%"/>
            </Fill>
            <Fill>
              <Heading size={6} textColor="secondary">iOS</Heading>
              <Image src={require("../assets/EddystoneIphone.jpg")} width="60%"/>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} textColor="secondary">Eddystone additional data</Heading>
          <List style={{ listStyle: "none" }}>
            <ListItem><Text lineHeight={1} textColor="tertiary" italic>Eddystone-UID - region/device unique id</Text></ListItem>
            <ListItem><Text lineHeight={1} textColor="tertiary" italic>TLM - status data</Text></ListItem>
            <ListItem><Text lineHeight={1} textColor="tertiary" italic>EID - A time-varying ephemeral identifier</Text></ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} textColor="secondary">Google Proximity API</Heading>
          <Text style={{marginTop: "3rem"}} lineHeight={1} textColor="tertiary" italic>cloud service that allows you to manage data associated with your BLE beacons using a REST interface.</Text>
          <Image src={images.proximityApi} />
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={1} textColor="secondary">iBeacons</Heading>
          <Image src={require("../assets/diagramredo.png")} />
          <List style={{ listStyle: "none" }}>
            <ListItem><Text lineHeight={1} textColor="tertiary" italic><span style={{ color: "#f74c4f" }}>UUID</span> - region/device unique id</Text></ListItem>
            <ListItem><Text lineHeight={1} textColor="tertiary" italic><span style={{ color: "#f74c4f" }}>Minor</span> and <span style={{ color: "#f74c4f" }}>Major</span> - used to identify specific beacon</Text></ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={4} textColor="tertiary" italic>Why it's cool?</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={4} textColor="tertiary" italic>It adds another <span style={{ color: "#f74c4f" }}>proximity</span> based layer of interactions with app users</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={4} textColor="tertiary" italic>So are Beacons just a proximity tool?</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={5} textColor="tertiary" italic>By letting device to be aware of <span style={{ color: "#f74c4f" }}>physical context</span> we change the way we interact with a user and ultimately the way we develop our apps</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Image src={require("../assets/beacon.jpg")}/>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Image width="100%" src={require("../assets/Blog_Sale_Beacon.jpg")}/>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Image width="100%" src={require("../assets/museum-beacons-1280x640.jpg")}/>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Image width="100%" src={require("../assets/AAEAAQAAAAAAAAisAAAAJGNjMzQ0ODMzLTk5NjctNGIxYS04OWFhLTUwNzM4ZDE2ZjMxNw.jpg")}/>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={4} textColor="tertiary" italic>By using physical context we try to <span style={{ color: "#f74c4f" }}>predict</span> user intent</Heading>
          <Image src={require("../assets/Ibeaconsmuseum.jpg")}/>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={4} textColor="secondary">General guidelines for <span style={{ color: "#f74c4f" }}>physical context</span> aware apps</Heading>
          <List style={{ listStyle: "none" }}>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Enable location services in our app</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Start scanning for beacons</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Check closest beacons against server</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Execute custom logic based on closeset beacon</Text></ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={1} lineHeight={2} textColor="quartenary">It's Demo time!</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <iframe height="500px" width="100%" src="https://www.youtube.com/embed/y_6E1iCPXEM?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullscreen />
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Code textColor="tertiary">react-native-beacon-manager</Code>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          bgDarken={.8}
          bgImage="https://ak9.picdn.net/shutterstock/videos/27477769/thumb/1.jpg"
          bgColor="primary"
          textSize=".8em"
          code={require("raw-loader!../codesamples/beacons-manager")}
          ranges={[
            { loc: [3, 5], note: "import library" },
            { loc: [5, 12], note: "regions list" },
            { loc: [12, 27], note: "Additional data for beacons" },
            { loc: [28, 29], note: "How accurate latitude and longitude in decimals" },
            { loc: [31, 43] },
            { loc: [55, 57], note: "request Authorization" },
            { loc: [58, 70], note: "get actual geolocation" },
            { loc: [71, 77], note: "start searching for beacons in region" },
            { loc: [88, 98], note: "update beacons list in region" },
            { loc: [99, 103], note: "define coloring based on accuracy/distance" },
            { loc: [169, 174], note: "map on beacons and merge with data" },
          ]}
        />
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={2} lineHeight={1} textColor="secondary">BLE beyond beacons</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={4} lineHeight={3} textColor="secondary">GATT - Generic Attribute Profile</Heading>
          <Heading size={5} textColor="tertiary" italic>Uses generic data protocol ATT to store Services and Characteristics in lookup table by using 16bit id</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={4} lineHeight={3} textColor="secondary">GATT - Topology</Heading>
          <Image src={require("../assets/microcontrollers_ConnectedTopology (1).png")}/>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} lineHeight={2} textColor="secondary">Services</Heading>
          <Heading size={4} textColor="tertiary" italic>Group functionality and expose <span style={{ color: "#f74c4f" }}>Characteristics</span></Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} lineHeight={2} textColor="secondary">Characteristics</Heading>
          <Heading size={4} textColor="tertiary" italic>Expose data to <span style={{ color: "#f74c4f" }}>read</span>, <span style={{ color: "#f74c4f" }}>write</span> and <span style={{ color: "#f74c4f" }}>observe</span> </Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Image src={require("../assets/ble_hierarchy.jpg")} />
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={1} lineHeight={2} textColor="quartenary">It's Demo time!</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <iframe height="500px" width="100%" src="https://www.youtube.com/embed/LRLzADDN_y4?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullscreen />
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Code textColor="tertiary">react-native-ble-plx</Code>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          bgDarken={.8}
          bgImage="https://ak9.picdn.net/shutterstock/videos/27477769/thumb/1.jpg"
          bgColor="primary"
          textSize=".8em"
          code={require("raw-loader!../codesamples/scanner")}
          ranges={[
            { loc: [1, 6], note: "main.js" },
            { loc: [8, 11], note: "main.js - Setting up Bluetooth Store" },
            { loc: [15, 26], note: "root-component.js - injecting bluetooth store" },
            { loc: [26, 31], note: "root-component.js - Setup ble manager" },
            { loc: [298, 300], note: "bluetoothStore.js - importing react-native-ble-plx" },
            { loc: [330, 340], note: "bluetoothStore.js - creating new manager instance and creating destroy action" },
            { loc: [31, 35], note: "root-component.js - subscribe to state change" },
            { loc: [340, 351], note: "bluetoothStore.js - subscribing to state change and creating sub remove action" },
            { loc: [35, 40], note: "root-component.js - clear subscribtion and destroy manager on unmount" },
            { loc: [122, 124], note: "scanner.js screen - Adding BLE button" },
            { loc: [77, 81], note: "scanner.js - Scan for nearby devices" },
            { loc: [363, 370], note: "bluetoothStore - use manager to scan devices" },
            { loc: [371, 374], note: "bluetoothStore - Update devices list" },
            { loc: [135, 146], note: "scanner.js - display devices" },
            { loc: [110, 113], note: "scanner.js - Adding connect button" },
            { loc: [89, 94], note: "scanner.js - Connect and navigate" },
            { loc: [401, 406], note: "bluetoothStore.js - connect to device" },
            { loc: [407, 409], note: "bluetoothStore.js - start discovery" },
            { loc: [416, 421], note: "bluetoothStore.js - discover services" },
            { loc: [421, 426], note: "bluetoothStore.js - discover characteristics" }
          ]}
        />
        <Slide bgImage={images.hacking} bgDarken={.4}>
          <Heading size={1} textColor="secondary">reverse engineering</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Image src={images.sniffing} />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="jsx"
          bgDarken={.8}
          bgImage="https://ak9.picdn.net/shutterstock/videos/27477769/thumb/1.jpg"
          bgColor="primary"
          textSize=".8em"
          code={require("raw-loader!../codesamples/ledbulb.example")}
          ranges={[
            { loc: [5, 6], note: "import Buffer to write base64 values" },
            { loc: [9, 16], note: "set specific characteristic and services constants" },
            { loc: [48, 51], note: "connect to lightbulb" },
            { loc: [111, 115], note: "If device is ready - render color picker" },
            { loc: [27, 41], note: "Write characteristics directly to device" }
          ]}
        />
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={1} textColor="secondary">The rest is React Native glue</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={1} lineHeight={2} textColor="secondary">Takeaways</Heading>
          <List style={{ listStyle: "none" }}>
            <ListItem>
              <Text textColor="tertiary">Beacons:<Code style={{color: "white", marginLeft: "24px", fontSize: ".8em"}}>react-native-beacons-manager</Code></Text>
            </ListItem>
            <ListItem>
              <Text textColor="tertiary">BLE: <Code style={{ color: "white", marginLeft: "78px", fontSize: ".8em"}}>react-native-ble-plx</Code></Text>
            </ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} textColor="secondary" italic>You were awesome!</Heading>
        </Slide>
        <Slide bgImage={images.network} bgDarken={.5}>
          <Heading size={3} textColor="secondary" italic>Thank you!</Heading>
          <List style={{ listStyle: "none" }}>
            <ListItem>
              <Link href="rn-bridging-physicalworld.surge.sh"><span style={{ textDecoration: "none ", color: "#b6d6c1"}}>slides: </span><span style={{ color: "#f74c4f"}}>rn-bridging-physicalworld.surge.sh</span></Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/vnovick/rn-bridging-physicalworld"><span style={{ textDecoration: "none ", color: "#b6d6c1"}}>repo: </span><span style={{ color: "#f74c4f", fontSize: "2rem"}}>https://github.com/vnovick/rn-bridging-physicalworld</span></Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}