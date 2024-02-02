import Image from "next/image";

const Card = () => {
  return (
    <div className="post-grid mb-[3rem] grid grid-cols-2 gap-[4rem]">
      <div className="post-img">
        <Image src="/images/p1.jpeg" className="image rounded-md" fill />
      </div>
      <div className="post-content my-3 flex items-start justify-between flex-col">
        <p className="date text-sm">
          11.01.2024 - <span className="text-red-500 font-medium">CULTURE</span>
        </p>
        <h2 className="text-3xl post-title font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p className="text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ea
          tempora! Et similique quia distinctio a perspiciatis nam ea, cum nemo
          adipisci veritatis facere exercitationem aperiam laudantium omnis
          tenetur.
        </p>
        <button className="font-medium border-b-2 border-red-500">Read More</button>
      </div>
    </div>
  );
};

export default Card;
