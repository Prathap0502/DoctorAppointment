import React from 'react';
import { useParams } from 'react-router-dom';

const City1 = () => {
 

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Welcome to CHENNAI
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row', // Left-right layout on larger screens
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap', // Ensures wrapping on smaller screens
        }}
      >
        {/* Left Side: Image */}
        <div style={{ flex: 1, minWidth: '300px', marginBottom: '20px' }}>
          <img
            src="https://i.pinimg.com/736x/f7/64/05/f76405c98fd3b8dadbd55d38198c1652.jpg"
            alt="Hospital"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          />
        </div>

        {/* Right Side: Content */}
        <div
          style={{
            flex: 1,
            minWidth: '300px',
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>
            Mazumdar Shaw Medical Centre, Bangalore
          </h2>
          <p style={{ fontSize: '18px', fontWeight: '600' }}>
            <strong>Super-Speciality</strong>
          </p>
          <p>769 Beds</p>
          <p>562 Doctors</p>

          <h3 style={{ fontSize: '20px', marginTop: '20px' }}>Services that we offer:</h3>
          <p>
            We offer an extensive range of services that include comprehensive primary & emergency care and other speciality services. Equipped with the latest technology, our facilities seek to provide exceptional medical care.
          </p>

          <h3 style={{ fontSize: '20px', marginTop: '20px' }}>Highlights:</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Consultation: Out-patient & In-patient</li>
            <li>24/7 Emergency & Trauma Services</li>
            <li>Pharmacy</li>
            <li>Blood Bank</li>
            <li>Laboratory Services: Biochemistry, Histopathology, Microbiology, Haematology, Clinical Pathology, Serology, Tissue Repository (Frozen Section)</li>
            <li>Chemotherapy</li>
          </ul>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              marginTop: '20px',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <button
              onClick={() => window.location.href = 'tel:+911234567890'}
              style={{
                backgroundColor: 'rgba(255, 87, 34, 0.9)',
                color: '#fff',
                padding: '12px 30px',
                borderRadius: '30px',
                cursor: 'pointer',
                border: 'none',
                fontSize: '16px',
                transition: 'all 0.3s ease-in-out',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 87, 34, 1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 87, 34, 0.9)'}
            >
              Call Now
            </button>
            <button
              onClick={() => window.open('https://www.google.com/maps?q=123,Main+Road,+Chennai,+India', '_blank')}
              style={{
                backgroundColor: 'rgba(76, 175, 80, 0.9)',
                color: '#fff',
                padding: '12px 30px',
                borderRadius: '30px',
                cursor: 'pointer',
                border: 'none',
                fontSize: '16px',
                transition: 'all 0.3s ease-in-out',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(76, 175, 80, 1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(76, 175, 80, 0.9)'}
            >
              Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City1;
