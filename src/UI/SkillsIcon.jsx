export default function SkillsIcon(props) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-md border border-black px-2 py-1">
      <img
        className="h-6"
        src={`https://skillicons.dev/icons?i=${props.src}`}
      />
      <p className="font-lato text-sm font-semibold">{props.name}</p>
    </div>
  );
}
