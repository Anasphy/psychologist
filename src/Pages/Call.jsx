import { useEffect, useState } from "react";
import {
  Call,
  CallControls,
  StreamCall,
  StreamTheme,
  StreamVideo,
  SpeakerLayout,
  StreamVideoClient
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";


const callId = "csb-" + Math.random().toString(16).substring(2);
const user_id = "csb-user";
const user = { id: user_id };

const apiKey = "c2kpuypxqcqy";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiY3NiLXVzZXIifQ.fwnkBoBiBp6tGEegvnWozeXP7vWTt-jQQ7ODZHJiH24"

const backgroundImageUrl = "https://th.bing.com/th/id/R.44ad7373fa1e68ef53a5affc1f057e21?rik=QxeAZ25iLABYeQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fuhvYTtV.jpg&ehk=R8kK1yo4S4Ha9rAknsdlVL2LZl8taz4FwmD05Z1u6ko%3d&risl=&pid=ImgRaw&r=0";


const Callapp = () => {
    const [client, setClient] = useState();
    const [call, setCall] = useState();
  
    useEffect(() => {
      const myClient = new StreamVideoClient({ apiKey, user, token });
      setClient(myClient);
      return () => {
        myClient.disconnectUser();
        setClient(undefined);
      };
    }, []);
  
    useEffect(() => {
      if (!client) return;
      const myCall = client.call("default", callId);
      myCall.join({ create: true }).catch((err) => {
        console.error(`Failed to join the call`, err);
      });
  
      setCall(myCall);
  
      return () => {
        setCall(undefined);
        myCall.leave().catch((err) => {
          console.error(`Failed to leave the call`, err);
        });
      };
    }, [client]);
  
    if (!client || !call) return null;
  
    return (
      <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
<StreamVideo client={client}>
        <StreamTheme className="my-theme-overrides">
          <StreamCall call={call}>
            <SpeakerLayout />
            <CallControls />
          </StreamCall>
        </StreamTheme>
      </StreamVideo>
      </div>
      
    );
}

export default Callapp