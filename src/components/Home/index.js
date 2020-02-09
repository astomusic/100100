import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  background-size: contain;
  background-image: url('http://storage.googleapis.com/cr-resource/free/27b4125c7c4484990420e6d24af384ce/600/photo-1452690700222-8a2a1a109f4c.jpg');
  position: relative;
  width: 30%;
  height: 30vw;
  margin: 1%;
  div {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    width: 100%;
    transition: all 1s;
  }
  &:hover div {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const Banner = styled.div`
  position: relative;
  width: 62%;
  height: 30vw;
  background-color: blue;
`;

const StyledLink = styled(Link)`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  color: transparent;
  &:hover {
    color: #fff;
  }
`;

const Home = () => {
  return (
    <React.Fragment>
      <BoxWrapper>
        <Box>
          <div />
          <StyledLink to={'/content/1'}>content</StyledLink>
        </Box>
        <Box>
          <div />
          <StyledLink to={'/content/2'}>content</StyledLink>
        </Box>
      </BoxWrapper>
      <BoxWrapper>
        <Box>
          <div />
          <StyledLink to={'/content/3'}>content</StyledLink>
        </Box>
        <Box>
          <div />
          <StyledLink to={'/content/4'}>content</StyledLink>
        </Box>
      </BoxWrapper>
      <BoxWrapper>
        <Banner>
          <StyledLink to={'/content/banner'}>Banner</StyledLink>
        </Banner>
      </BoxWrapper>
      <BoxWrapper>
        <Box>
          <div />
          <StyledLink to={'/content/5'}>content</StyledLink>
        </Box>
        <Box>
          <div />
          <StyledLink to={'/content/6'}>content</StyledLink>
        </Box>
      </BoxWrapper>
    </React.Fragment>
  );
};

export default Home;
