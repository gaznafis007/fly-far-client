
import { 
  Container, 

} from '@mui/material';
import Hero from '../components/Hero';
import HotDeals from '../components/HotDeals';

function Home() {
  

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Hero/>
      <HotDeals/>
    </Container>
  );
}

export default Home; 