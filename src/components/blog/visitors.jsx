import React from "react";

const visitors = () => {
  return (
    <section className="py-20">
      <div className="res-pattern p-10 md:p-16 lg:p-20">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary tracking-wider">
              PENGUNJUNG HARI INI
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-primary text-3xl md:text-4xl lg:text-5xl tracking-widest">
              9820
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default visitors;
