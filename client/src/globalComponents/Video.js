import styled from "styled-components";

const Video = styled.video.attrs((props) => ({
  autoPlay: true,
  muted: true,
  loop: true,
  src: props.src,
}))`
  position: fixed;
  height: 100vh;
  width: 100vw;
  object-fit: fill;
  z-index: -1;
`;

export default Video;
