export function LoginFormulario () {
    return (   
        <div className="max-w-xl mx-auto bg-zinc-800 p-3 rounded-lg">
            <form >
                <input type="email" placeholder="correo@correo.com"  className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'/>
            
                <input type="password" placeholder="Password"  className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'/>
                
            <div>
                <button className="bg-green-600 p-3 mt-3 w-full rounded-lg">Login</button>
            </div> 
            </form>
        </div> 
        )
}