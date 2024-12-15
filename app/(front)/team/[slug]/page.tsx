const Employee = () => {
  return (
    <section>
      <div className="relative bg-employee bg-contain bg-no-repeat bg-center min-h-[300px] min-w-screen">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-fit py-10 text-center bg-white/50 rounded-t-2xl">
          <h1 className="h1 text-accent mb-2">James Smith</h1>
          <p className="h4 text-secondary">Team / James Smith</p>
        </div>
      </div>
    </section>
  );
};

export default Employee;
