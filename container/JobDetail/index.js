import classes from "./index.module.css";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import TextField from "../../components/TextField";
import LandingPageButton from "../../components/LandingPageButton";
import RectangularButton from "../../components/RectangularButton";



export default function JobDetailContainer(props) {
    const {value,setValue} = props;

    return (
        <div className={classes.JobDetail}>
          <div className={classes.content}>
            <div className={classes.jobTitle}>Agoda.com</div>
            <div className={classes.jobIntro}>
              Associate Software Engineer, Back End team
            </div>
            <div className={classes.button}>
                <RectangularButton
                    style={{ backgroundColor: "#F08F34", top: "0vh", left: "0%", right:"20%" }}
                    url="/SignIn"
                    name="Sign In"
                />
                <RectangularButton
                    style={{ backgroundColor: "#424642", top: "-7.65vh", left: "12%", right:"20%" }}
                    url="/Save"
                    name="Save"
                />
            </div>
            <div className={classes.jobDetail}>
              About Agoda<br/><br/>
              Agoda is an online travel booking platform for accommodations, flights,
              and more. We build and deploy cutting-edge technology that connects 
              travelers with more than 2.5 million accommodations globally. Based in 
              Asia and part of Booking Holdings, our 4,000+ employees representing 90+ 
              nationalities foster a work environment rich in diversity, creativity, and 
              collaboration. We innovate through a culture of experimentation and 
              ownership, enhancing the ability for our customers to experience the world.<br/><br/>
              
              Get to Know our Team:<br/><br/>
              In Agoda’s Back End Engineering department, we build the scalable, fault-
              tolerant systems and APIs that host our core business logic. Our systems 
              cover all major areas of our business: inventory and pricing, product 
              information, customer data, communications, partner data, booking 
              systems, payments, and more. These mission-critical systems change 
              frequently with dozens of releases per day, so we must employ 
              state-of-the-art CI/CD and testing techniques in order to make sure everything 
              works without any downtime. We also ensure that our systems are self-
              healing, responding gracefully to extreme loads or unexpected input. In 
              order to accomplish this, we use state-of-the-art languages like Scala and 
              Go, data technologies like Kafka and Aerospike, and agile development 
              practices. Most importantly though, we hire great people from all around 
              the world and empower them to be successful. Whether it’s building new 
              projects like Flights and Packages or reimagining our existing business, 
              you’ll make a big impact as part of the Back End Engineering team.<br/><br/>    
              
              The Opportunity:<br/><br/>

              You might call yourself “full stack” or "back end" or you might consider 
              yourself an authority in a certain field, but you will have a keen interest in 
              how the different systems work together.  We'd love to hear from you if you 
              are experienced in any of the technologies we work with (note - we are not 
              looking for you to have them all). We are interested in speaking to persons 
              of any level from individuals just starting their IT careers to experts in their 
              field.
            </div>
            <div></div>
          </div>
        </div>
      );
}