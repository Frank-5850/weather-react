import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  height: 40%;
  width: 95%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  margin: 10px;
`;

const Header = styled.h3`
  margin: 0;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const HistoryCard = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
`;

const HistoryCardHeader = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
`;

const HeaderTitle = styled.h3`
  margin: 0;
`;

const HistoryCardTemp = styled.h4`
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

const History = ({ history, historySearch }) => {
  const [searchedHistory, setSearchedHistory] = useState([]);

  useEffect(() => {
    setSearchedHistory(history);
  }, [history]);

  return (
    <HistoryContainer>
      {searchedHistory.length > 0 ? (
        <div>
          <Header>History</Header>
        </div>
      ) : (
        <div></div>
      )}
      {searchedHistory &&
        searchedHistory.map((city, index) => (
          <HistoryCard key={index} onClick={(e) => historySearch(e, city.name)}>
            <HistoryCardHeader>
              <HeaderTitle>
                {city.name}, {city.sys.country}
              </HeaderTitle>
              <HistoryCardTemp>{city.main.temp} °F</HistoryCardTemp>
            </HistoryCardHeader>
            <HistoryCardBody>
              <HistoryIcon
                src={`http://openweathermap.org/img/wn/${city?.weather?.[0].icon}@2x.png`}
              />
              <HistoryDescription>
                {city?.weather[0].description}
              </HistoryDescription>
            </HistoryCardBody>
          </HistoryCard>
        ))}
    </HistoryContainer>
  );
};

export default History;
