import react, {
  useEffect,
  useState,
  useContext,
  useParamsת,
  useLocation,
} from "react";
// import { CurrentEventContext } from "../components/EventCard";
import { LoginContext } from "../App";

const EventPartnerPage = () => {
  const [chosenEvent, setChosenEvent] = useState(null);
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  // let location = useLocation();
  // let { event } = useParams();
  // const [event, setEvent] = useContext(CurrentEventContext);
  useEffect(() => {
    // console.log(location);
    // const val = event ? "partner : " : null;
    // console.log({
    //   val,
    // });
  }, []);

  return <div></div>;
};

export default EventPartnerPage;
