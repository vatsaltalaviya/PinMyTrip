import React from 'react'

const Gallery = () => {
    const data = [
        {
          title: "The Himalayas",
          image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2V0fGVufDB8fDB8fHww",
        },
        {
          title: "Beach Vibes",
          image: "https://images.unsplash.com/photo-1512641406448-6574e777bec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0fGVufDB8fDB8fHww",
        },
        {
          title: "City Lights",
          image: "https://images.unsplash.com/photo-1517685633466-403d6955aeab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Forest Trail",
          image: "https://images.unsplash.com/photo-1481988535861-271139e06469?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Desert Adventure",
          image: "https://images.unsplash.com/photo-1588001832198-c15cff59b078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Snow Escape",
          image: "https://cdn.cosmos.so/c33e532e-867e-423b-b007-1ae0c010ee7e?format=jpeg",
        },
        {
          title: "Tropical Paradise",
          image: "https://cdn.cosmos.so/546a497e-6fce-4c22-8303-d489b4095c5c?format=jpeg",
        },
        {
          title: "Cultural Landmarks",
          image: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Sunset Views",
          image: "https://plus.unsplash.com/premium_photo-1664121799890-b5605834b72a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Lakeside Calm",
          image: "https://cdn.cosmos.so/d6e4a413-4985-4305-8745-b0d48414bfb1?format=jpeg",
        },
        {
          title: "Desert Adventure",
          image: "https://images.unsplash.com/photo-1588001832198-c15cff59b078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Snow Escape",
          image: "https://cdn.cosmos.so/c33e532e-867e-423b-b007-1ae0c010ee7e?format=jpeg",
        },
        {
          title: "Tropical Paradise",
          image: "https://cdn.cosmos.so/546a497e-6fce-4c22-8303-d489b4095c5c?format=jpeg",
        },
        {
          title: "Cultural Landmarks",
          image: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Sunset Views",
          image: "https://plus.unsplash.com/premium_photo-1664121799890-b5605834b72a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Lakeside Calm",
          image: "https://cdn.cosmos.so/d6e4a413-4985-4305-8745-b0d48414bfb1?format=jpeg",
        },
        {
          title: "Tropical Paradise",
          image: "https://cdn.cosmos.so/546a497e-6fce-4c22-8303-d489b4095c5c?format=jpeg",
        },
        {
          title: "Desert Adventure",
          image: "https://images.unsplash.com/photo-1588001832198-c15cff59b078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Snow Escape",
          image: "https://cdn.cosmos.so/c33e532e-867e-423b-b007-1ae0c010ee7e?format=jpeg",
        },
        {
          title: "Tropical Paradise",
          image: "https://cdn.cosmos.so/546a497e-6fce-4c22-8303-d489b4095c5c?format=jpeg",
        },
        {
          title: "Cultural Landmarks",
          image: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Sunset Views",
          image: "https://plus.unsplash.com/premium_photo-1664121799890-b5605834b72a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Lakeside Calm",
          image: "https://cdn.cosmos.so/d6e4a413-4985-4305-8745-b0d48414bfb1?format=jpeg",
        },
        {
          title: "Desert Adventure",
          image: "https://images.unsplash.com/photo-1588001832198-c15cff59b078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        
        {
          title: "Snow Escape",
          image: "https://cdn.cosmos.so/c33e532e-867e-423b-b007-1ae0c010ee7e?format=jpeg",
        },
        {
          title: "Cultural Landmarks",
          image: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Lakeside Calm",
        image: "https://cdn.cosmos.so/d6e4a413-4985-4305-8745-b0d48414bfb1?format=jpeg",
      },
      {
          title: "Sunset Views",
          image: "https://plus.unsplash.com/premium_photo-1664121799890-b5605834b72a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
      },
      ];
  return (
    
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-6 mt-15">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="mb-4 relative break-inside-avoid overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover rounded-t-xl transition-transform duration-500 hover:scale-105"
              />
                <p className="text-xl text-white absolute bottom-4 p-4">{item.title}</p>
              
            </div>
          ))}
        </div>
    
  );
}

export default Gallery