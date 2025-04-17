
import { 
  Container, 

} from '@mui/material';
import Hero from '../components/Hero';

function Home() {
  

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Hero/>
    </Container>
  );
}

export default Home; 