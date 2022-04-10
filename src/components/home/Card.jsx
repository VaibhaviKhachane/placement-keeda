
export const Card = () => {
    return (
        <div className="bg-gray-200 w-96 h-[30rem] rounded relative shadow-2xl shadow-gray-200 -top-14 select-none">
            <img src="https://picsum.photos/id/1003/200/300" alt="" className="rounded-full w-20 h-20 ring-4 absolute shadow-2xl right-36 -top-10" />
            <div className="text-gray-900 text-xl font-semibold absolute top-14 p-3 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur assumenda, eligendi, odit, voluptas quos laudantium cupiditate ex quis quidem quam porro culpa! Repellat voluptatibus fugiat vel deserunt rerum quis quos alias enim dolore asperiores, culpa ipsum sit veritatis odit labore.
                adipisicing elit. Pariatur assumenda,
                quis quidem quam porro culpa! Repellat voluptatibus fugiat vel deserunt rerum quis quos alias enim dolore asperiores, culpa ipsum sit veritatis odit labore.
            </div>
            <div className="absolute circle -bottom-32 right-10 shadow-xl " />
            <div className="absolute shape shape12 rotate-45 -left-48 top-32" />
        </div>
    );
}