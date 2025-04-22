import React from 'react'

const Gallery = () => {
    const data = [
        {
          title: "Beach Vibes",
          image: "https://images.unsplash.com/photo-1622375734599-925cb5328554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Dubai",
          image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "City Lights",
          image: "https://plus.unsplash.com/premium_photo-1661943659036-aa040d92ee64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Forest Trail",
          image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww",
        },
        {
          title: "Desert Adventure",
          image: "https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fHww",
        },
        {
          title: "Snow Escape",
          image: "https://plus.unsplash.com/premium_photo-1667579187855-fed841be2ec9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D",
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
          image: "https://plus.unsplash.com/premium_photo-1669741908255-4c4132306000?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Forest Vibes",
          image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0fGVufDB8fDB8fHww",
        },
        {
          title: "Snow Escape",
          image: "https://plus.unsplash.com/premium_photo-1667579187855-fed841be2ec9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Forest Paradise",
          image: "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fHww",
        },
        {
          title: "Cultural Landmarks",
          image: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Himalyas",
          image: "https://images.unsplash.com/photo-1631377952034-a0460eba141f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGltYWxheWF8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Lakeside Calm",
          image: "https://plus.unsplash.com/premium_photo-1669741908255-4c4132306000?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Tropical Paradise",
          image: "https://cdn.cosmos.so/546a497e-6fce-4c22-8303-d489b4095c5c?format=jpeg",
        },
        {
          title: "Desert Adventure",
          image: "https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fHww",
        },
        {
          title: "Snow Escape",
          image: "https://plus.unsplash.com/premium_photo-1667579187855-fed841be2ec9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D",
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
          image: "https://plus.unsplash.com/premium_photo-1669741908255-4c4132306000?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Desert Adventure",
          image: "https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0fGVufDB8fDB8fHww",
        },
        
        {
          title: "Snow Escape",
          image: "https://plus.unsplash.com/premium_photo-1667579187855-fed841be2ec9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Cultural Landmarks",
          image: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Lakeside Calm",
        image: "https://plus.unsplash.com/premium_photo-1669741908255-4c4132306000?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D",
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