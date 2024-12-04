type ImageCardProps = {
  title: string;
  img: string;
  description: string;
  location: string;
};

function ImageCard({ title, img, description, location }: ImageCardProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:skew-y-3 hover:border-4 hover:border-dotted">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Visit {location}</button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
