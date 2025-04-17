import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  styled 
} from '@mui/material';

const TabsContainer = styled(Box)({
  display: 'flex',
  backgroundColor: '#2FE5A7',
  borderRadius: '50px',
  padding: '5px',
  width: 'fit-content',
  marginLeft: 'auto'
});

const Tab = styled(Box)(({ active }) => ({
  padding: '8px 24px',
  borderRadius: '50px',
  cursor: 'pointer',
  color: active ? '#2FE5A7' : 'white',
  backgroundColor: active ? 'white' : 'transparent',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: active ? 'white' : 'rgba(255,255,255,0.1)'
  }
}));

const DealsContainer = styled(Box)({
  display: 'flex',
  gap: '20px',
  marginTop: '20px',
  position: 'relative'
});

const DealCard = styled(Box)({
  flex: 1,
  height: '200px',
  borderRadius: '12px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
});

const DealImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});

const DealContent = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
  background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
});

const NavigationButton = styled(Box)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  zIndex: 1,
  '&:hover': {
    backgroundColor: '#f5f5f5'
  }
});

function HotDeals() {
  const [activeTab, setActiveTab] = useState('FLIGHT');

  const deals = {
    FLIGHT: [
      {
        title: 'Up to 11% discount on',
        subtitle: 'US BANGLA TICKETS',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05'
      },
      {
        title: 'Get your BEST DEAL HERE',
        subtitle: 'flydubai',
        image: 'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad'
      },
      {
        title: 'AIR ASTRA TICKETS',
        subtitle: 'AVAILABLE HERE',
        image: 'https://images.unsplash.com/photo-1531642765602-5cae668fbc22'
      }
    ],
    'GROUP FARE': [
      {
        title: '15% Group Discount',
        subtitle: 'For 10+ Travelers',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
      },
      {
        title: 'Corporate Travel Package',
        subtitle: 'Special Business Rates',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b'
      },
      {
        title: 'Family Package Deal',
        subtitle: 'Save More Together',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d'
      }
    ],
    TOUR: [
      {
        title: "Cox's Bazar Special",
        subtitle: '3 Nights, 4 Days Package',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
      },
      {
        title: 'Dubai Adventure',
        subtitle: 'All-Inclusive 5 Days',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c'
      },
      {
        title: 'Bangkok & Pattaya',
        subtitle: 'Best of Thailand',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365'
      }
    ],
    VISA: [
      {
        title: 'Tourist Visa Service',
        subtitle: 'Fast Processing for UAE',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f'
      },
      {
        title: 'Student Visa Special',
        subtitle: 'UK & USA Applications',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
      },
      {
        title: 'Business Visa Offer',
        subtitle: 'Schengen Countries',
        image: 'https://images.unsplash.com/photo-1569974498991-d37c13c8f96b'
      }
    ]
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          Hot Deals
        </Typography>
        <TabsContainer>
          {['FLIGHT', 'GROUP FARE', 'TOUR', 'VISA'].map((tab) => (
            <Tab
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Tab>
          ))}
        </TabsContainer>
      </Box>

      <DealsContainer>
        {deals[activeTab]?.map((deal, index) => (
          <DealCard key={index}>
            <DealImage src={deal.image} alt={deal.title} />
            <DealContent>
              <Typography variant="h6" sx={{ 
                fontSize: deal.title.includes('%') ? '36px' : '24px',
                fontWeight: 'bold',
                mb: 1
              }}>
                {deal.title}
              </Typography>
              <Typography variant="body1">
                {deal.subtitle}
              </Typography>
            </DealContent>
          </DealCard>
        ))}
      </DealsContainer>
    </Container>
  );
}

export default HotDeals; 