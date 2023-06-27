import Image from "next/image";
import React from "react";
import Pic from "../../assets/unsplash.jpg"

const HomePage = () => {
  return (
    <div className="md:flex">
      <Image
        src="https://i.ibb.co/vkvvb8M/pic.jpg"
        width={340}
        height={500}
        blurDataURL="data:image/webp;base64,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"
        placeholder="blur"
      />
      <Image src={Pic} alt="pic" placeholder="blur" width={600} />
      <Image
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        width={340}
        height={500}
        blurDataURL="data:image/webp;base64,UklGRvACAABXRUJQVlA4WAoAAAAgAAAAvgAAdgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggAgEAANALAJ0BKr8AdwA+7XawVSmnJCMgavEwHYlnbuABdfZW8Y/QCFa75lqXY7Le0ddnE3bMC6MImA8XCBYKMQMyHw2kVdSffciLhB+Rd9glMWjs+BJoNXtX6ouINQnZI9Ow26xTrnJG6QAA/u/GP3Q7YHeVnwJac3pYqKbR+87AQjokvTrXK7+vdkPss2skV7RHnLNCsHKqGJjQUX/rBuXSWrTuoeFO7v/iVwIpb2LNwi25iDIyY9YJu6bvBq6WUsJdGKKYjUGnKT5tZlz2VrQ89OpNzuWM6UqXKLNsQVyAJB4qOEkdwLFgAWf8eCkaeBB9uZG5MuA+tACSL2C/4kKBEAAAAA=="
        placeholder="blur"
      />
    </div>
  );
};

export default HomePage;
