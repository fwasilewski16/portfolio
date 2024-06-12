export default function SkillsIcon(props) {
  return (
    <div className="flex gap-2 items-center justify-center border border-black px-2 py-1 rounded-md">
      <img
        className="h-6"
        src={`https://skillicons.dev/icons?i=${props.src}`}
      />
      <p className="font-poppins font-semibold text-sm">{props.name}</p>
    </div>
  );
}
