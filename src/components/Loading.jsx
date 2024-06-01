import {Circles} from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="w-full flex justify-center items-center h-screen">
            <Circles
                height="80"
                width="80"
                color="red"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}
export default Loading