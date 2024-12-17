const sampleData = {
  users: [
    {
      email: "admin@admin.com",
      name: "admin",
      password: "123456",
      role: "admin",
    },
  ],
  projects: [
    {
      title: "modern bathroom 01",
      slug: "modern-bathroom-01",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bathroom"],
      category: "bathroom",
      thumbnail: "/images/projects/bathroom_01.jpg",
      images: ["/images/projects/bathroom_01.jpg"],
      designers: ["James Brown", "Natalie Martinez"],
    },
    {
      title: "modern kitchen 01",
      slug: "modern-kitchen-01",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "kitchen"],
      category: "kitchen",
      thumbnail: "/images/projects/kitchen_01.jpg",
      images: ["/images/projects/kitchen_01.jpg"],
      designers: ["James Brown", "Alan Webber"],
    },
    {
      title: "modern living room 01",
      slug: "modern-living-room-01",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "living_room"],
      category: "living room",
      thumbnail: "/images/projects/living_room_01.jpg",
      images: ["/images/projects/living_room_01.jpg"],
      designers: ["James Brown", "Patricia Glasper"],
    },
    {
      title: "modern bedroom 01",
      slug: "modern-bedroom-01",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bedroom"],
      category: "bedroom",
      thumbnail: "/images/projects/bedroom_01.jpg",
      images: ["/images/projects/bedroom_01.jpg"],
      designers: ["James Brown", "Bobby Fetcher"],
    },
    {
      title: "modern bathroom 02",
      slug: "modern-bathroom-02",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bathroom"],
      category: "bathroom",
      thumbnail: "/images/projects/bathroom_02.jpg",
      images: ["/images/projects/bathroom_02.jpg"],
      designers: ["Natalie Martinez", "Jacqueline Jackson"],
    },
    {
      title: "modern bathroom 03",
      slug: "modern-bathroom-03",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bathroom"],
      category: "bathroom",
      thumbnail: "/images/projects/bathroom_03.jpg",
      images: ["/images/projects/bathroom_03.jpg"],
      designers: ["Natalie Martinez", "Mark Fitz"],
    },
    {
      title: "modern bathroom 04",
      slug: "modern-bathroom-04",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bathroom"],
      category: "bathroom",
      thumbnail: "/images/projects/bathroom_04.jpg",
      images: ["/images/projects/bathroom_04.jpg"],
      designers: ["Natalie Martinez", "Nora Owen"],
    },
    {
      title: "modern bedroom 02",
      slug: "modern-bedroom-02",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bedroom"],
      category: "bedroom",
      thumbnail: "/images/projects/bedroom_02.jpg",
      images: ["/images/projects/bedroom_02.jpg"],
      designers: ["Alan Webber", "Jacqueline Jackson"],
    },
    {
      title: "modern bedroom 03",
      slug: "modern-bedroom-03",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bedroom"],
      category: "bedroom",
      thumbnail: "/images/projects/bedroom_03.jpg",
      images: ["/images/projects/bedroom_03.jpg"],
      designers: ["Alan Webber", "Mark Fitz"],
    },
    {
      title: "modern bedroom 04",
      slug: "modern-bedroom-04",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bedroom"],
      category: "bedroom",
      thumbnail: "/images/projects/bedroom_04.jpg",
      images: ["/images/projects/bedroom_04.jpg"],
      designers: ["Alan Webber", "Nora Owen"],
    },
    {
      title: "modern kitchen 02",
      slug: "modern-kitchen-02",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "kitchen"],
      category: "kitchen",
      thumbnail: "/images/projects/kitchen_02.jpg",
      images: ["/images/projects/kitchen_02.jpg"],
      designers: ["Patricia Glasper", "Bobby Fetcher"],
    },
    {
      title: "modern kitchen 03",
      slug: "modern-kitchen-03",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "kitchen"],
      category: "kitchen",
      thumbnail: "/images/projects/kitchen_03.jpg",
      images: ["/images/projects/kitchen_03.jpg"],
      designers: ["Patricia Glasper", "Jacqueline Jackson"],
    },
    {
      title: "modern kitchen 04",
      slug: "modern-kitchen-04",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "kitchen"],
      category: "kitchen",
      thumbnail: "/images/projects/kitchen_04.jpg",
      images: ["/images/projects/kitchen_04.jpg"],
      designers: ["Patricia Glasper", "Mark Fitz"],
    },
    {
      title: "modern living room 02",
      slug: "modern-living-room-02",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "living_room"],
      category: "living room",
      thumbnail: "/images/projects/living_room_02.jpg",
      images: ["/images/projects/living_room_02.jpg"],
      designers: ["Bobby Fetcher", "Nora Owen"],
    },
    {
      title: "modern living room 03",
      slug: "modern-living-room-03",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "living_room"],
      category: "living room",
      thumbnail: "/images/projects/living_room_03.jpg",
      images: ["/images/projects/living_room_03.jpg"],
      designers: ["Jacqueline Jackson", "Nora Owen"],
    },
    {
      title: "modern living room 04",
      slug: "modern-living-room-04",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "living_room"],
      category: "living room",
      thumbnail: "/images/projects/living_room_04.jpg",
      images: ["/images/projects/living_room_04.jpg"],
      designers: ["Bobby Fetcher", "Mark Fitz"],
    },
  ],
  articles: [
    {
      title: "Let’s Get Solution For Building Construction Work",
      slug: "let-s-get-solution-for-building-construction-work",
      descriptions:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "interior",
      thumbnail: "/images/articles/interior_design.jpg",
      images: ["/images/articles/interior_design.jpg"],
      tags: ["interior", "design", "modern", "kitchen"],
      autor: "James Brown",
    },
    {
      title: "Interior Design Trends 2025: What's in Style?",
      slug: "interior-design-trends-2025-whats-in-style",
      descriptions:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "interior",
      thumbnail: "/images/articles/trends-2025.jpg",
      images: ["/images/articles/trends-2025.jpg"],
      tags: ["interior", "design", "trends"],
      autor: "Natalie Martinez",
    },
    {
      title: "How to Create a Cozy Home: Tips from Professionals",
      slug: "how-to-create-a-cozy-home-tips-from-professionals",
      descriptions:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "decoration",
      thumbnail: "/images/articles/cozy_home.jpg",
      images: ["/images/articles/cozy_home.jpg"],
      tags: ["interior", "design", "home"],
      autor: "Alan Webber",
    },
    {
      title: "The Perfect Color for Every Room: Psychology and Style",
      slug: "the-perfect-color-for-every-room-psychology-and-style",
      descriptions:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "interior",
      thumbnail: "/images/articles/perfect-color.jpg",
      images: ["/images/articles/perfect-color.jpg"],
      tags: ["style", "color", "design", "home"],
      autor: "Patricia Glasper",
    },
    {
      title: "Small Spaces, Big Ideas: Hacks for Compact Apartments",
      slug: "small-spaces-big-ideas-hacks-for-compact-apartments",
      descriptions:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "design",
      thumbnail: "/images/articles/small_spaces.jpg",
      images: ["/images/articles/small_spaces.jpg"],
      tags: ["spaces", "compact", "apartments", "home"],
      autor: "Bobby Fetcher",
    },
    {
      title:
        "Lighting in Interior Design: How to Choose and Highlight Accents?",
      slug: "lighting-in-interior-design-how-to-choose-and-highlight-accents",
      descriptions:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "interior",
      thumbnail: "/images/articles/lighting_in_interior.jpg",
      images: ["/images/articles/lighting_in_interior.jpg"],
      tags: ["design", "interior", "highlight", "accents"],
      autor: "Jacqueline Jackson",
    },
    {
      title: "Eco-Design: How to Make Your Interior Sustainable and Modern",
      slug: "eco-design-how-to-make-your-interior-sustainable-and-modern",
      descriptions:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "design",
      thumbnail: "/images/articles/eco_design.jpg",
      images: ["/images/articles/eco_design.jpg"],
      tags: ["eco-design", "interior", "modern", "sustainable"],
      autor: "Mark Fitz",
    },
  ],
};

export default sampleData;
