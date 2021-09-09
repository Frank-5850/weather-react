import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  height: 40%;
  width: 95%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;

const HistoryCard = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const HistoryCardHeader = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  margin: 0;
`;

const HistoryCardTemp = styled.h3`
  margin: 0;
`;

const HistoryCardBody = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const HistoryIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  height: 75%;
`;

const HistoryDescription = styled.h6`
  margin: 0;
`;

const History = ({ history }) => {
  const [searchedHistory, setSearchedHistory] = useState([]);

  useEffect(() => {
    setSearchedHistory(history);
  }, [history]);

  return (
    <HistoryContainer>
      {searchedHistory &&
        searchedHistory.map((city, index) => (
          <HistoryCard key={index}>
            <HistoryCardHeader>
              <HeaderTitle>
                {city.name}, {city.sys.country}
              </HeaderTitle>
              <HistoryCardTemp>{city.main.temp} °F</HistoryCardTemp>
            </HistoryCardHeader>
            <HistoryCardBody>
              <HistoryIcon
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              />
              <HistoryDescription>
                {city.weather[0].description}
              </HistoryDescription>
            </HistoryCardBody>
          </HistoryCard>
        ))}
    </HistoryContainer>
  );
};

export default History;
