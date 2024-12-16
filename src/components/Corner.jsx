export const Corner = () => {
  return (
    <>
      <div className="w-[130px] h-[130px] bg-[#F3F4F6] rounded-[50%] absolute -left-[60px] bottom-[500px] flex">
        <img
          className="w-[40px] h-[75px] mt-[25px] ml-[15px]"
          src="../pinecone1.png"
          alt="Pinecone logo"
        />
        <img
          className="w-[40px] h-[75px] mt-[25px] ml-[15px]"
          src="../pinecone2.png"
          alt="Pinecone logo"
        />
      </div>
      <div className="w-[30px] h-[30px] bg-[#F3F4F6] absolute -left-[15px] bottom-[610px] "></div>
      <div className="w-[30px] h-[25px] bg-[#0F141E] absolute -left-[0] bottom-[629px] rounded-[50%]"></div>
      <div className="w-[30px] h-[30px] bg-[#F3F4F6] absolute -left-[15px] bottom-[490px] "></div>
      <div className="w-[30px] h-[25px] bg-[#0F141E] absolute -left-[0] bottom-[477px] rounded-[50%]"></div>
    </>
  );
};
