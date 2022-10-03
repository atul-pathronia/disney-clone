import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="./images/cta-logo-one.svg"></CTALogoOne>
          <Signup>GET ALL THERE</Signup>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 31/12/2022, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="./images/cta-logo-two.png"></CTALogoTwo>
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  /* display: flex; */
  /* flex-direction: column; */
  text-align: center;
  background-image: url("./images/login-background.jpg");
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8rem 4rem;
  height: 100%;
`;

const CTA = styled.div`
  width: 100%;
  max-width: 65rem;
  padding: 1rem 2rem;
`;

const CTALogoOne = styled.img`
  max-width: 60rem;
  margin: 0 auto;
  width: 100%;
  min-height: 0.1rem;
  display: block;
  margin-bottom: 1rem;
`;

const Signup = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  display: block;
  padding: 2rem 0;
  margin-bottom: 1rem;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  color: hsla(0, 0%, 95.3%, 1);
  letter-spacing: 0.15rem;
`;

const CTALogoTwo = styled.img`
  max-width: 100%;
  display: block;
`;

export default Login;
