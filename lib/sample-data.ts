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
  services: [
    {
      title: "project plan",
      slug: "project-plan",
      subtitle:
        "Development of a detailed plan covering the concept, timeline, and key project implementation stages.",
      description:
        "A well-structured project plan is the cornerstone of every successful design project. At our design studio, we approach each project with precision and creativity, ensuring every detail aligns with your vision and goals.\nThe process begins with a collaborative concept development phase, where we delve deep into your brand’s identity and aspirations. During this phase, we work closely with you to define the project’s objectives, target audience, and the overarching aesthetic direction. This ensures the foundation of our work resonates with your brand's essence.\nOnce the concept is established, we craft a comprehensive timeline. This includes clearly defined milestones, regular checkpoints, and buffer periods to accommodate any adjustments or unforeseen challenges. Transparency and accountability are key principles in our planning, giving you confidence in the progress and delivery of your project. The implementation stages are meticulously organized into actionable steps. From initial sketches and drafts to final designs, every phase is documented, reviewed, and refined collaboratively. We prioritize communication, keeping you informed and involved at every stage.\nKey deliverables and deadlines are outlined upfront to ensure smooth execution. Whether it’s branding, website design, or a complete visual identity overhaul, our team guarantees each element aligns with the project’s scope and timeline.\nIn addition to the creative aspect, we incorporate practical considerations such as resource allocation, budget optimization, and risk management. This holistic approach minimizes delays and ensures an efficient workflow, resulting in a seamless project experience.\nOur ultimate goal is to transform your vision into a tangible, impactful reality. By following a robust and transparent project plan, we ensure the final product exceeds expectations and leaves a lasting impression. \n Let us help you bring your ideas to life with a project plan tailored to your needs and designed to deliver exceptional results.",
      icon: "RiCompasses2Fill",
    },
    {
      title: "interior work",
      slug: "interior-work",
      subtitle:
        "Execution of finishing works, including interior design, material selection, and space optimization.",
      description:
        "Transforming a space into a functional and aesthetically pleasing environment requires attention to detail, expert craftsmanship, and a clear vision. At our design studio, we specialize in executing interior works that harmonize creativity with practicality, delivering results that inspire and delight.\nOur process begins with a thorough assessment of the space and your unique requirements. We prioritize understanding your lifestyle, preferences, and goals to ensure the interior design reflects your personality and needs. This foundation allows us to craft a cohesive design concept tailored to your space.\nMaterial selection plays a pivotal role in creating an inviting and durable interior. Our team collaborates with trusted suppliers to source high-quality materials, considering both functionality and style. From flooring and wall finishes to furniture and fixtures, every element is chosen to enhance the ambiance and meet your budget.\nSpace optimization is another key aspect of our approach. We focus on maximizing usability while maintaining a sense of openness and flow. Whether it’s clever storage solutions, ergonomic layouts, or innovative design features, we ensure every square meter serves a purpose.\nThroughout the finishing works, we maintain a seamless blend of creativity and technical expertise. Our skilled craftsmen bring the design to life with precision, ensuring every detail is executed to perfection. Regular progress updates and site visits keep you informed and involved, fostering trust and transparency.\nLighting, color schemes, and textures are carefully curated to create a balanced and inviting atmosphere. We believe in designing interiors that not only look beautiful but also feel comfortable and functional in everyday use.\nFrom initial concepts to the final brushstroke, we manage every aspect of the project to ensure a stress-free experience. Our commitment to quality and excellence means your interior will be completed on time and exceed expectations.\nWhether you're designing a cozy home, a sleek office, or a vibrant commercial space, we are here to turn your vision into reality. Let us redefine your interiors with creativity, expertise, and precision.",
      icon: "RiMagicLine",
    },
    {
      title: "realization",
      slug: "realization",
      subtitle:
        "Complete project execution adhering to deadlines, quality standards, and agreed budget constraints.",
      description:
        "Bringing a vision to life requires meticulous execution, unwavering commitment, and a sharp focus on quality. At our design studio, we specialize in delivering complete project realization, ensuring every detail aligns with your expectations and surpasses industry standards.\nOur realization process begins with a structured plan, transforming concepts into actionable steps. We prioritize clear communication and collaboration, keeping you informed and involved throughout the project’s journey. From the initial groundwork to the final touches, every stage is guided by our dedication to excellence.\nAdherence to deadlines is one of our core principles. We understand the importance of timely delivery and allocate resources efficiently to maintain a seamless workflow. Our team ensures every milestone is met without compromising on quality or attention to detail.\nQuality standards are at the heart of our execution. By leveraging skilled professionals, advanced tools, and premium materials, we achieve a finish that is both durable and visually stunning. Every aspect of the project is subject to rigorous quality checks to ensure a flawless result.\nBudget management is another cornerstone of our approach. We maintain strict adherence to the agreed budget constraints, providing transparency in costs and optimizing resources without cutting corners. This ensures your investment delivers maximum value and a final product that exceeds expectations.\nWhether it’s a residential project, a commercial space, or a custom design endeavor, our team approaches each challenge with creativity and precision. From structural elements to the finest decorative details, we bring your vision to life with expertise and care.\nRegular updates and open communication keep you engaged and confident in the progress. Any challenges are addressed proactively, ensuring the project stays on track and aligns with the original goals. Our commitment to realizing your vision goes beyond simply completing the project. We aim to create spaces that inspire, function flawlessly, and stand the test of time. With a balance of technical expertise and artistic flair, we transform ideas into remarkable realities.\nTrust us to handle every aspect of your project realization with professionalism, precision, and passion. Together, we’ll turn your dreams into a space that feels uniquely yours.",
      icon: "RiToolsLine",
    },
    {
      title: "retail design",
      slug: "retail-design",
      subtitle:
        "Designing functional and visually appealing retail spaces tailored to brand identity and customer experience.",
      description:
        "Retail spaces are more than just stores—they are extensions of a brand’s identity and a stage for unforgettable customer experiences. At our design studio, we specialize in creating retail environments that captivate, engage, and drive success.\nOur retail design process begins with a deep understanding of your brand’s essence and goals. We analyze your target audience, product offerings, and market trends to develop a design concept that reflects your unique identity and values. This ensures the space not only looks stunning but also resonates with your customers.\nFunctionality is a cornerstone of our approach. Every layout, display, and traffic flow is strategically planned to maximize usability and efficiency. From intuitive product placement to optimized cashier stations, we design spaces that encourage seamless customer navigation and interaction.\nVisual appeal is equally essential. Our team blends innovative design elements, striking aesthetics, and cohesive branding to create a retail environment that leaves a lasting impression. Lighting, colors, materials, and textures are carefully selected to align with your brand and create an inviting atmosphere.\nCustomer experience drives every decision we make. We prioritize creating a space where customers feel comfortable, inspired, and connected to your brand. Whether it’s designing immersive product showcases or incorporating interactive elements, we ensure the environment elevates their shopping journey.\nAttention to detail is evident in every aspect of our work. From selecting durable, high-quality materials to crafting custom fixtures, we ensure the space not only looks exceptional but also stands the test of time.\nCollaboration is at the heart of our retail design projects. We work closely with you to align every element with your vision, offering regular updates and seeking feedback at key stages. This ensures the final result is perfectly tailored to your needs.\nWhether you’re launching a flagship store, revamping an existing space, or creating a pop-up shop, our team brings expertise and creativity to deliver results that exceed expectations.\nLet us help you transform your retail space into a dynamic environment where your brand comes to life and your customers love to shop. Together, we’ll create a space that inspires loyalty and drives success.",
      icon: "RiAncientPavilionLine",
    },
    {
      title: "2d/3d Art Work",
      slug: "2d-3d-art-work",
      subtitle:
        "Creation of high-quality 2D and 3D artwork for visualization, concept development, and presentation.",
      description:
        "Visual storytelling is a powerful tool in bringing ideas to life, and our design studio excels in crafting stunning 2D and 3D artwork to elevate your projects. From initial concepts to polished presentations, we deliver creative solutions that captivate and inspire.\nOur process begins with understanding your vision and objectives. Whether it’s for architectural visualization, product development, or artistic expression, we tailor every detail to match your needs. This foundation ensures the final artwork aligns seamlessly with your goals.\nIn 2D artwork, we specialize in creating detailed illustrations, concept sketches, and graphic designs that communicate ideas effectively. Each piece is crafted with precision, using vibrant colors, balanced compositions, and unique styles that reflect your project’s essence.\nFor 3D artwork, our expertise extends to modeling, texturing, rendering, and animation. We bring ideas to life in three dimensions, offering realistic visualizations and dynamic perspectives that add depth and impact. Whether it’s a photorealistic rendering or a stylized 3D concept, our work elevates your project’s visual appeal.\nThe combination of 2D and 3D elements enhances versatility and adaptability. From flat illustrations to immersive visual experiences, we offer solutions that meet a wide range of requirements, including product showcases, marketing materials, and interactive presentations.\nOur team leverages industry-leading tools and technologies to ensure every piece is of the highest quality. Attention to detail, creative innovation, and technical expertise define our approach, resulting in artwork that exceeds expectations.\nCollaboration is key to our success. We involve you throughout the creative process, seeking your feedback and aligning every iteration with your vision. This partnership ensures the final product captures your ideas perfectly.\nWhether you need a single visual or a complete suite of artwork, we approach every project with the same passion and dedication. Our goal is to provide artwork that not only looks exceptional but also serves as a powerful tool for communication and storytelling.\nLet us help you visualize your ideas and make a lasting impression with high-quality 2D and 3D artwork. Together, we’ll create visuals that inspire, engage, and bring your concepts to life.",
      icon: "GiArtificialIntelligence",
    },
    {
      title: "facade design",
      slug: "facade-design",
      subtitle:
        "Development of innovative and aesthetic facade designs that align with architectural principles.",
      description:
        "The facade is the face of a building, making it the first and lasting impression for onlookers. At our design studio, we specialize in crafting facade designs that seamlessly blend innovation, functionality, and aesthetic appeal to enhance the character of any structure.\nOur process begins with a detailed analysis of the project’s architectural context and purpose. We consider the surrounding environment, cultural influences, and your specific requirements to develop a design concept that harmonizes with its surroundings while standing out.\nInnovation drives our approach. By incorporating modern design trends, advanced materials, and cutting-edge techniques, we create facades that are both visually striking and structurally sound. Our team explores unique patterns, textures, and lighting elements to craft facades that captivate and inspire.\nAesthetic appeal is at the core of our designs. We pay close attention to proportions, symmetry, and color schemes, ensuring every element contributes to a cohesive and polished look. From sleek, modern facades to intricate, timeless designs, we tailor our work to reflect your vision and style.\nFunctionality is equally important. Beyond appearance, we focus on practical considerations such as durability, energy efficiency, and maintenance. By selecting high-quality materials and sustainable solutions, we ensure your facade not only looks stunning but also performs exceptionally over time.\nCollaboration is a cornerstone of our process. We work closely with architects, engineers, and clients to align the facade design with the broader architectural vision. Regular consultations and updates ensure the final result exceeds expectations and integrates seamlessly into the overall project.\nOur expertise spans various building types, from residential and commercial structures to cultural and institutional landmarks. No matter the scale or complexity, we approach each project with creativity, precision, and a commitment to excellence.\nWhether you’re looking to revamp an existing building or create a distinctive new structure, our facade designs transform concepts into reality. Let us help you make a statement with innovative and aesthetic facades that elevate your architectural project to new heights.",
      icon: "BsBuildings",
    },
    {
      title: "decoration work",
      slug: "decoration-work",
      subtitle:
        "Implementation of decorative elements to enhance aesthetic appeal and create a cohesive design environment.",
      description:
        "Decoration is the art of turning a space into a masterpiece, where every detail contributes to an environment that feels complete, inviting, and inspiring. At our design studio, we specialize in implementing decorative elements that elevate the aesthetic appeal and bring cohesion to any interior or exterior setting.\nOur decoration work begins with a thorough understanding of your vision and the space’s purpose. Whether it’s a home, office, retail store, or public area, we tailor our approach to match your style, preferences, and functional requirements.\nWe believe in the power of details. From selecting the perfect color palette and textures to choosing complementary furniture, fixtures, and accessories, every element is thoughtfully curated to create harmony within the space.\nArtistic elements are a signature of our work. We incorporate unique decorative pieces, including wall art, sculptures, lighting installations, and custom designs, to infuse personality and character into the environment. These touches transform ordinary spaces into extraordinary experiences.\nCohesion is key to a successful design. Our team ensures that all decorative elements align with the overall theme, architecture, and functionality of the space. By maintaining balance and proportion, we create environments that feel polished and harmonious.\nWe use high-quality materials and work with skilled artisans to ensure durability and impeccable craftsmanship in every decorative element. Whether it’s handcrafted furniture, bespoke lighting, or intricate wall finishes, our commitment to quality shines through.\nFlexibility and adaptability define our approach. We understand that every project is unique, so we offer tailored solutions that cater to diverse styles, from minimalist and modern to classic and opulent.\nCollaboration is integral to our process. We engage with clients at every stage, from concept development to the final installation, to ensure the result reflects their personality and vision. Regular updates and open communication guarantee your satisfaction.\nWhether you’re looking to refresh a single room or transform an entire property, our decoration work enhances the beauty and functionality of your space. Let us help you create an environment where every detail tells a story and contributes to an unforgettable experience.\nElevate your space with decorative elements that inspire and delight. Together, we’ll craft a design that not only meets but exceeds your expectations.",
      icon: "GiHalfTornado",
    },
  ],
};

export default sampleData;
