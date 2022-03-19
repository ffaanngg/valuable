const avatar = (id, hash) =>
  `https://cdn.discordapp.com/avatars/${id}/${hash}.png?size=4096`;

export default function UserCard(props) {
  const user = props.user;
  return (
    <div className="rounded-lg bg-neutral-800 m-6 p-4 flex items-center drop-shadow-md">
      <img
        src={avatar(user.id, user.avatar)}
        alt={user.username}
        className="rounded-full w-14 h-14 float-left"
      />
      <h1 className="text-neutral-400 text-2xl font-heading ml-4 whitespace-nowrap overflow-hidden text-ellipsis">
        {user.username}
      </h1>
    </div>
  );
}
