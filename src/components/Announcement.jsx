import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    font-weight: bold;
   `
const Announcement = () => {
  return (
    <Container> FSD and SDE Project Presentation  </Container>
  )
}

export default Announcement