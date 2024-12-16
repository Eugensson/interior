const Blog = () => {
  return (
    <section>
      <div className="relative bg-blog bg-contain bg-no-repeat bg-center min-h-[300px] min-w-screen">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-fit py-5 text-center bg-white rounded-t-3xl">
          <h1 className="h2 text-accent mb-2">Articles & News</h1>
          <p className="h4 text-secondary">Home / Blog</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
