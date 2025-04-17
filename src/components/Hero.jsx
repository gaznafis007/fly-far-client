import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Paper,
  styled
} from '@mui/material';
import { 
  FlightTakeoff,
  LocationOn,
  CalendarToday,
  ApartmentOutlined,
  TourOutlined,
  Flight,
  
} from '@mui/icons-material';

const HeroWrapper = styled(Box)({
  backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px 0',
  minHeight: '400px'
});

const ContentWrapper = styled(Paper)({
  backgroundColor: 'white',
  borderRadius: '15px',
  padding: '20px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
});

const MainTabs = styled(Box)({
  display: 'flex',
  gap: '10px',
  backgroundColor: 'white',
  padding: '5px',
  borderRadius: '50px',
  marginBottom: '20px',
  justifyContent: 'center',
  '& .tab-item': {
    padding: '8px 25px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    color: '#666',
    '&.active': {
      backgroundColor: '#2FE5A7',
      color: 'white'
    },
    '& .tab-icon': {
      fontSize: '20px'
    },
    '& .tab-text': {
      fontSize: '14px',
      textTransform: 'uppercase'
    }
  }
});

const FlightTabs = styled(Box)({
  display: 'flex',
  gap: '10px',
  marginBottom: '30px',
  '& .flight-tab': {
    padding: '8px 25px',
    borderRadius: '50px',
    cursor: 'pointer',
    color: '#2FE5A7',
    border: '1px solid #2FE5A7',
    '&.active': {
      backgroundColor: '#2FE5A7',
      color: 'white'
    }
  }
});

const LocationBox = styled(Box)({
  backgroundColor: '#F8F9FA',
  borderRadius: '8px',
  padding: '8px 15px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '& .location-icon': {
    color: '#2FE5A7'
  }
});

const DateBox = styled(Box)({
  backgroundColor: '#F8F9FA',
  borderRadius: '8px',
  padding: '8px 15px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '& .calendar-icon': {
    color: '#2FE5A7'
  }
});

const SearchButton = styled('button')({
  backgroundColor: '#2FE5A7',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '12px',
  width: '100%',
  fontSize: '16px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#25d194'
  }
});

function Hero() {
  const [activeTab, setActiveTab] = useState('flight');
  const [flightType, setFlightType] = useState('oneway');
  const [flightData, setFlightData] = useState({
    oneway: null,
    roundway: null
  });

  useEffect(() => {
    // Fetch flight data
    Promise.all([
      fetch('/ONEWAY.json'),
      fetch('/ROUNDWAY.JSON')
    ])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(([oneway, roundway]) => {
      setFlightData({ oneway, roundway });
    });
  }, []);

  const renderFlightSearch = () => (
    <>
      <FlightTabs>
        <div 
          className={`flight-tab ${flightType === 'oneway' ? 'active' : ''}`}
          onClick={() => setFlightType('oneway')}
        >
          ONE-WAY
        </div>
        <div 
          className={`flight-tab ${flightType === 'roundway' ? 'active' : ''}`}
          onClick={() => setFlightType('roundway')}
        >
          ROUND-WAY
        </div>
        <div 
          className={`flight-tab ${flightType === 'multicity' ? 'active' : ''}`}
          onClick={() => setFlightType('multicity')}
        >
          MULTI-CITY
        </div>
      </FlightTabs>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Box sx={{ color: '#666', mb: 1 }}>FROM</Box>
          <Box sx={{ fontSize: '32px', color: '#2FE5A7', fontWeight: 'bold', mb: 1 }}>DAC</Box>
          <LocationBox>
            <LocationOn className="location-icon" />
            Hazrat Shahjalal Intl Airport (DAC)
          </LocationBox>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FlightTakeoff sx={{ fontSize: '40px', color: '#2FE5A7' }} />
        </Box>

        <Box>
          <Box sx={{ color: '#666', mb: 1 }}>TO</Box>
          <Box sx={{ fontSize: '32px', color: '#2FE5A7', fontWeight: 'bold', mb: 1 }}>CXB</Box>
          <LocationBox>
            <LocationOn className="location-icon" />
            Cox's Bazar Airport(CXB)
          </LocationBox>
        </Box>

        <Box>
          <DateBox>
            <CalendarToday className="calendar-icon" />
            18 Apr 25
          </DateBox>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <select style={{ padding: '8px', backgroundColor: '#F8F9FA', border: 'none', borderRadius: '8px' }}>
          <option>1 ADULT</option>
        </select>
        <select style={{ padding: '8px', backgroundColor: '#F8F9FA', border: 'none', borderRadius: '8px' }}>
          <option>0 CHILD</option>
        </select>
        <select style={{ padding: '8px', backgroundColor: '#F8F9FA', border: 'none', borderRadius: '8px' }}>
          <option>0 INFANT</option>
        </select>
        <select style={{ padding: '8px', backgroundColor: '#F8F9FA', border: 'none', borderRadius: '8px', flex: 1 }}>
          <option>Economy</option>
        </select>
      </Box>

      <SearchButton>
        SEARCH FOR FLIGHT
      </SearchButton>
    </>
  );

  return (
    <HeroWrapper>
      <Container maxWidth="lg">
        <MainTabs>
          <div className={`tab-item ${activeTab === 'flight' ? 'active' : ''}`} onClick={() => setActiveTab('flight')}>
            <FlightTakeoff className="tab-icon" />
            <span className="tab-text">FLIGHT</span>
          </div>
          <div className={`tab-item ${activeTab === 'hotel' ? 'active' : ''}`} onClick={() => setActiveTab('hotel')}>
            <ApartmentOutlined className="tab-icon" />
            <span className="tab-text">HOTEL</span>
          </div>
          <div className={`tab-item ${activeTab === 'tour' ? 'active' : ''}`} onClick={() => setActiveTab('tour')}>
            <TourOutlined className="tab-icon" />
            <span className="tab-text">TOUR</span>
          </div>
          <div className={`tab-item ${activeTab === 'visa' ? 'active' : ''}`} onClick={() => setActiveTab('visa')}>
            <Flight className="tab-icon" />
            <span className="tab-text">VISA</span>
          </div>
        </MainTabs>

        <ContentWrapper>
          {activeTab === 'flight' && renderFlightSearch()}
          {/* Add other tab content components here */}
        </ContentWrapper>
      </Container>
    </HeroWrapper>
  );
}

export default Hero; 