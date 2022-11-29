import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import PlayCard from '../components/PlayCard';
const Homepage = () => {
  const PlayList = [
    {id : 1,
    title : "한국 vs 이탈리아",
    date : "22.11.12",
    link : "",
    recommentRate: "100",
    Thumbnail: "",
    img : "이미지",
    },
    {id : 2,
      title : "일본 vs 중국",
      date : "22.11.15",
      link : "",
      recommentRate: "20",
      Thumbnail: "",
      img : "이미지",
      },
      {id : 3,
        title : "미국 vs 러시아",
        date : "22.11.15",
        link : "",
        recommentRate: "150",
        Thumbnail: "",
        img : "이미지",
        },
        {id : 4,
          title : "캐나다 vs 대만",
          date : "22.11.15",
          link : "",
          recommentRate: "20",
          Thumbnail: "",
          img : "이미지",
          },
  ];
      return (<div>  
        <Container>
        <Row>
          {PlayList.map((play) => (
            <Col lg={3}>
              <PlayCard play={play} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
  );
}

export default Homepage;