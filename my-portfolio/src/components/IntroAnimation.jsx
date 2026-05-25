export default function IntroAnimation({onFinish}){
  const greetings = useMemo(()=>[
    
"Hello", "नमस्ते", "Hola", "Bonjour",
      "Ciao", "Olá", "Здравствуйте",
      "Merhaba", "Γειά", "Hej", "Hallo", "Salam"

  ],[])
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  return(

  )
}