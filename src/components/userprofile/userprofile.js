import React from 'react';
import "./userprofile.css";
import { Progress, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
const UserProfile = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.imageLink} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.firstName} {props.lastName}</CardTitle>
                    <CardSubtitle>{props.location}</CardSubtitle>

                    <CardText>
                        Skills: {props.skills}
                    </CardText>
                    <CardText>
                        Member since: {props.dateJoined}
                    </CardText>
                    Karma Chips Collected:
                    <Progress color="failure" value={props.karmaChips}>{props.karmaChips}</Progress>
                </CardBody>
            </Card>
        
        </div>
    );
};
export default UserProfile;