import bcrypt from "bcryptjs";

const sampleData = {
  users: [
    {
      email: "admin@admin.com",
      name: "admin",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
  projects: [
    {
      title: "modern bathroom 01",
      slug: "modern-bathroom-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bathroom"],
      category: "bathroom",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714252/bathroom_01_wjpd2e.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714252/bathroom_01_wjpd2e.jpg",
      ],
      designer: "James Brown",
    },
    {
      title: "modern kitchen 01",
      slug: "modern-kitchen-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "kitchen"],
      category: "kitchen",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/kitchen_01_x6z3vv.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/kitchen_01_x6z3vv.jpg",
      ],
      designer: "Natalie Martinez",
    },
    {
      title: "modern living room 01",
      slug: "modern-living-room-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "living_room"],
      category: "living room",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714254/living_room_01_ze91gf.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714254/living_room_01_ze91gf.jpg",
      ],
      designer: "Alan Webber",
    },
    {
      title: "modern bedroom 01",
      slug: "modern-bedroom-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bedroom"],
      category: "bedroom",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/bedroom_01_fim9jo.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/bedroom_01_fim9jo.jpg",
      ],
      designer: "Patricia Glasper",
    },
    {
      title: "modern bathroom 02",
      slug: "modern-bathroom-02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bathroom"],
      category: "bathroom",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714252/bathroom_02_gdn4sp.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714252/bathroom_02_gdn4sp.jpg",
      ],
      designer: "Bobby Fetcher",
    },
    {
      title: "modern bathroom 03",
      slug: "modern-bathroom-03",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bathroom"],
      category: "bathroom",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714252/bathroom_03_cpkfem.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714252/bathroom_03_cpkfem.jpg",
      ],
      designer: "Jacqueline Jackson",
    },
    {
      title: "modern bathroom 04",
      slug: "modern-bathroom-04",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bathroom"],
      category: "bathroom",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/bathroom_04_py7dhr.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/bathroom_04_py7dhr.jpg",
      ],
      designer: "Mark Fitz",
    },
    {
      title: "modern bedroom 02",
      slug: "modern-bedroom-02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bedroom"],
      category: "bedroom",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/bedroom_02_l2xxuc.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/bedroom_02_l2xxuc.jpg",
      ],
      designer: "Nora Owen",
    },
    {
      title: "modern bedroom 03",
      slug: "modern-bedroom-03",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bedroom"],
      category: "bedroom",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/bedroom_03_kffxez.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/bedroom_03_kffxez.jpg",
      ],
      designer: "James Brown",
    },
    {
      title: "modern bedroom 04",
      slug: "modern-bedroom-04",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "bedroom"],
      category: "bedroom",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/bedroom_04_u4chtr.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714253/bedroom_04_u4chtr.jpg",
      ],
      designer: "Nora Owen",
    },
    {
      title: "modern kitchen 02",
      slug: "modern-kitchen-02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "kitchen"],
      category: "kitchen",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714254/kitchen_02_vpumll.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714254/kitchen_02_vpumll.jpg",
      ],
      designer: "Natalie Martinez",
    },
    {
      title: "modern kitchen 03",
      slug: "modern-kitchen-03",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "kitchen"],
      category: "kitchen",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714254/kitchen_03_croqsg.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714254/kitchen_03_croqsg.jpg",
      ],
      designer: "Alan Webber",
    },
    {
      title: "modern kitchen 04",
      slug: "modern-kitchen-04",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "kitchen"],
      category: "kitchen",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714254/kitchen_04_tmtadn.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714254/kitchen_04_tmtadn.jpg",
      ],
      designer: "Patricia Glasper",
    },
    {
      title: "modern living room 02",
      slug: "modern-living-room-02",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "living_room"],
      category: "living room",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714254/living_room_02_w55qtx.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714254/living_room_02_w55qtx.jpg",
      ],
      designer: "Bobby Fetcher",
    },
    {
      title: "modern living room 03",
      slug: "modern-living-room-03",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "living_room"],
      category: "living room",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714255/living_room_03_luwh7i.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714255/living_room_03_luwh7i.jpg",
      ],
      designer: "Jacqueline Jackson",
    },
    {
      title: "modern living room 04",
      slug: "modern-living-room-04",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      tags: ["interior", "design", "modern", "living_room"],
      category: "living room",
      thumbnail:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714255/living_room_04_zo0yzi.jpg",
      images: [
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734714255/living_room_04_zo0yzi.jpg",
      ],
      designer: "Mark Fitz",
    },
  ],
  articles: [
    {
      title: "Let’s Get Solution For Building Construction Work",
      slug: "let-s-get-solution-for-building-construction-work",
      description:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "interior",
      image:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734713740/interior_design_ywtoat.jpg",
      tags: ["interior", "design", "modern", "kitchen"],
      author: "James Brown",
    },
    {
      title: "Interior Design Trends 2025: What's in Style?",
      slug: "interior-design-trends-2025-whats-in-style",
      description:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "interior",
      image:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734713740/trends-2025_ndstkh.jpg",
      tags: ["interior", "design", "trends"],
      author: "Natalie Martinez",
    },
    {
      title: "How to Create a Cozy Home: Tips from Professionals",
      slug: "how-to-create-a-cozy-home-tips-from-professionals",
      description:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "decoration",
      image:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734713740/cozy_home_w18css.jpg",
      tags: ["interior", "design", "home"],
      author: "Alan Webber",
    },
    {
      title: "The Perfect Color for Every Room: Psychology and Style",
      slug: "the-perfect-color-for-every-room-psychology-and-style",
      description:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "interior",
      image:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734713740/perfect-color_bomy7f.jpg",
      tags: ["style", "color", "design", "home"],
      author: "Patricia Glasper",
    },
    {
      title: "Small Spaces, Big Ideas: Hacks for Compact Apartments",
      slug: "small-spaces-big-ideas-hacks-for-compact-apartments",
      description:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "design",
      image:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734713740/small_spaces_mkbnfq.jpg",
      tags: ["spaces", "compact", "apartments", "home"],
      author: "Bobby Fetcher",
    },
    {
      title:
        "Lighting in Interior Design: How to Choose and Highlight Accents?",
      slug: "lighting-in-interior-design-how-to-choose-and-highlight-accents",
      description:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "interior",
      image:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734713740/lighting_in_interior_cqyvcw.jpg",
      tags: ["design", "interior", "highlight", "accents"],
      author: "Jacqueline Jackson",
    },
    {
      title: "Eco-Design: How to Make Your Interior Sustainable and Modern",
      slug: "eco-design-how-to-make-your-interior-sustainable-and-modern",
      description:
        "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      category: "design",
      image:
        "https://res.cloudinary.com/dbwzfevx3/image/upload/v1734713740/eco_design_id7a4i.jpg",
      tags: ["eco-design", "interior", "modern", "sustainable"],
      author: "Mark Fitz",
    },
  ],
};

export default sampleData;
