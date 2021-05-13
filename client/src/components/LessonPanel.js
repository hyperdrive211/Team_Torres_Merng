import React from 'react'; 
import {Card, Icon, Label, Image, Button} from 'semantic-ui-react';
import moment from 'moment'; 
import {Link} from 'react-router-dom'; 


function LessonPanel(props){
   const imageSrc = "https://www.derrydaily.net/wp-content/uploads/2018/12/Screenshot-2018-12-07-at-14.09.25.png"
   const {
       id,
       lessonName, 
       lessonDescription, 
       lessonVidLink, 
       createdBy, 
       comments, 
       likes, 
       lessonType, 
       commentCount,
       likeCount, 
       createdAt
   } = props.lesson; 


   const likeLesson = () => {
       console.log('Lesson has been liked'); 
   }

    return(
        <Card href='#' as={Link} to={`/content/${id}`}>
            <Image src={imageSrc}/>
            <Card.Content>
              <Card.Header>
                  {lessonName}
              </Card.Header>
                <Card.Meta>
                  <span>Uploaded {moment(createdAt).fromNow()}</span>
                </Card.Meta>
                  <Card.Description>{lessonDescription}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="button-container">
               <Button>
                   <Icon name='comment outline'/>
                   {commentCount} {commentCount !== 1 ? "Comments" : "Comment"}
            </Button>
               <Button as='div' labelPosition='right'>
                   <Button onClick= {likeLesson}>
                       <Icon name='heart'/>
                       Like
                   </Button>
                 <Label basic color='red' pointing='left'>
                     {likeCount}
                </Label>
               </Button>
               </div>
            </Card.Content>
        </Card>
    ); 
}

export default LessonPanel; 