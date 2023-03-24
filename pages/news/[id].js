import { useRouter } from 'next/router'

const NewsDetail = () => {
    const router=useRouter();
    const id=router.query.id;
    console.log(id)

  return (
    <div>NewsDetail
        <h3>
            {id}
        </h3>
    </div>
  )
}

export default NewsDetail