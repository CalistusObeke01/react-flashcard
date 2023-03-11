type ErrorMessageProps = {
    isError: string
}
export const ErrorMessage = ({isError}: ErrorMessageProps) => {
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded ml-[-4rem] mr-[2rem]" role="alert">
        <strong>Error:</strong>
        <span className="block sm:inline">{isError}</span>
    </div>
}