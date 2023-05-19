import React from 'react'
import Navbar from 'funuicss/component/NavBar'
import Typography from 'funuicss/component/Typography'
import SidebarTrigger from 'funuicss/component/SidebarTrigger'
import LinkWrapper from 'funuicss/component/LinkWrapper'
import Div from 'funuicss/component/Div'
import Icon from 'funuicss/component/Icon'
import NavLogo from 'funuicss/component/NavLogo'
import Link from 'next/link';
import Section from 'funuicss/component/Section';
import Blob from 'funuicss/component/Blob'
import RowFlex from 'funuicss/component/RowFlex'
export default function Home() {
return (
<div>
<Div customStyle={{
padding:"1rem 10%",
minHeight:"90vh"
}}>
<Navbar>
<NavLogo>
<Typography heading="h4" color="gradient" text="PortFolio" />
</NavLogo>


<LinkWrapper visibleLinks>
<Div funcss="light-success avatar hoverable pointer" width="30px" height="30px">
<Icon icon="fab fa-youtube"  />
</Div>
<Div funcss="light avatar hoverable pointer" width="30px" height="30px">
<Icon icon="fab fa-twitter"  />
</Div>
<Div funcss="light-success avatar hoverable pointer" width="30px" height="30px">
<Icon icon="fab fa-instagram"  />
</Div>
</LinkWrapper>
</Navbar>

<Div padding="60px 0 0 0" maxWidth="500px" margin="0 auto">
  <RowFlex responsiveMedium gap="1rem">
    <Div>
    <Blob
    height={"100px"}
    width="100px"
    shape={"61% 39% 74% 26% / 63% 58% 42% 37%"}
    funcss={"center"}
    background={"/me.jpg"}
    />
    </Div>
    <Div>
    <Typography
text="Iddris Abdul Wahab"
heading="h4"
color="secondary"
lighter
block
/>
<Typography
text={
    <>
    <span>Web Developer & creator of </span>
     <Link href="https://funui.netlify.app" className='text-primary text-bold'>
        FunUi
    </Link>
    <span> and </span>
    <Link href="https://funtechs.netlify.app" className='text-primary text-bold'>
        Funtechs
    </Link>
    </>
}
color="secondary"
/>
    </Div>
  </RowFlex>
<Div margin="2rem 0">

<Typography
text="I am Iddris Abdul Wahab, a full stack developer and the proud creator of FunUi and Funtechs."
article
/>
<Section />
<Typography
text={`
My passion for coding and creating user-friendly interfaces drives me to excel in both front-end 
and back-end development.
`}
article
/>
<Section />
<Typography
text={`
I have successfully built FunUi, a React and Next js component Ui library that helps developers
create good and attractive Ui with fewer lines of code, 
and Funtechs, a platform for learning programming for free. 
`}
article
/>
<Section />
<Typography
text={`
Through my work, I aim to enhance user experiences and simplify technology for everyone.
`}
article
italic
color="primary"
/>

</Div>

</Div>
</Div>


</div>
)
}

