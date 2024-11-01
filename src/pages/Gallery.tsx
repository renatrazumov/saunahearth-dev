import React from 'react';

const Gallery = () => {
  const galleries = [
    {
      category: "Modern Designs",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200", 
          title: "Contemporary Outdoor Sauna" 
        },
        { 
          url: "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?auto=format&fit=crop&q=80&w=1200", 
          title: "Modern Glass-Front Sauna" 
        },
        { 
          url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=1200", 
          title: "Minimalist Design" 
        }
      ]
    },
    {
      category: "Traditional Styles",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1543489822-c49534f3271f?auto=format&fit=crop&q=80&w=1200", 
          title: "Classic Nordic Sauna" 
        },
        { 
          url: "https://images.unsplash.com/photo-1551906993-c8b38a6ab201?auto=format&fit=crop&q=80&w=1200", 
          title: "Rustic Cedar Cabin" 
        },
        { 
          url: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=1200", 
          title: "Traditional Log Sauna" 
        }
      ]
    },
    {
      category: "Luxury Features",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?auto=format&fit=crop&q=80&w=1200", 
          title: "Premium Interior" 
        },
        { 
          url: "https://images.unsplash.com/photo-1572420456860-08b5d0f70b42?auto=format&fit=crop&q=80&w=1200", 
          title: "Panoramic Views" 
        },
        { 
          url: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80&w=1200", 
          title: "Deluxe Lighting" 
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="py-12 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-amber-100 text-lg">Explore our collection of custom-built outdoor saunas</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {galleries.map((gallery, i) => (
          <div key={i} className="mb-16">
            <h2 className="text-2xl font-bold mb-8">{gallery.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.images.map((image, j) => (
                <div key={j} className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-semibold text-xl">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;