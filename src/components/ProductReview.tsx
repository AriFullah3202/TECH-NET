import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { useGetCommentQuery, usePostCommentMutation } from '@/redux/feature/product/prodrctApi';





interface IProps {
  id: string;
}

export default function ProductReview({ id }: IProps) {

  const [inputValue, setInputValue] = useState<string>('');
  const { data  } = useGetCommentQuery(id , {refetchOnMountOrArgChange : true , pollingInterval : 30000})
  console.log('this is data ' , data)

  // সাধারণত GET ক্ষেত্রে RTK query এর hook কে কল করতে হয় , এবং তিনটা জিনিস রির্টান করতো । 
  //  const {data , isLoading , error} = useGetProductsQuery(undefined)
  // যেহেতু এটা পোস্ট কমেন্টের জন্য কল করা হচ্ছে । 
  // usePostCommentMutaion হচ্ছে hook , এটা রির্টান করবে  । 
  const [postComment , {isLoading , error , isSuccess}] = usePostCommentMutation();

  console.log(isLoading)
 console.log(error)
 console.log(isSuccess)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const option = {
      id : id,
      data : { comment : inputValue }
    }
    // এখানে কল করতে হবে । 
    //যেটাকে আমরা post বলি সেটাকে RTK এর ভাষায় mutation বলি । 
    postComment(option)
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index : number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}