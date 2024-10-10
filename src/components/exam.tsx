import {useState} from "react";
import dataArray from '../data.js'
import {formatTimeStamp} from "@src/utils/time.ts";
import {Record} from "@icon-park/react";
import yaml from "js-yaml";

interface ListItemType {
    id: number,
    title: string,
    content: string,
    key: string,
    date: number,
    isNew?: boolean,
}


const Exam = () => {
    function sortList(array: ListItemType[]) {
        return array.sort((a, b) => b.date - a.date);
    }

    const defaultList = [...sortList(dataArray)] as ListItemType[]
    const [listA, setListA] = useState(defaultList)
    const [listB, setListB] = useState([] as ListItemType[])
    const clickHandler = (newItem: ListItemType, cardType: 'listA' | 'listB') => {
        if (cardType === 'listA') {
            setListA(prevState => {
                return sortList(prevState.filter((item) => item.id !== newItem.id))
            })
            setListB(prevState => sortList([...prevState, newItem]))
        } else if (cardType === 'listB') {
            setListB(prevState => {
                return sortList(prevState.filter((item) => item.id !== newItem.id))
            })
            setListA(prevState => sortList([...prevState, newItem]))
        }
    }
    const submitHandler = () => {
        const output: Record<string, { id: number, date: number }> = {}
        listB.forEach((item) => {
            output[item.key] = {id: item.id, date: item.date}
        })
        console.log(output)
        const yamlStr = yaml.dump(output);
        console.log(yamlStr)
        const blob = new Blob([yamlStr], {type: 'text/yaml'});
        const url = URL.createObjectURL(blob);
        console.log(url)
        const link = document.createElement('a');
        link.href = url;
        link.download = 'output.yaml';

        // 将链接添加到页面并点击以触发下载
        document.body.appendChild(link);
        link.click();

        // 清理
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    return (
        <div className='h-[calc(100vh_-_92px)] grid grid-cols-2 gap-2 !overflow-hidden'>
            <div className='!overflow-y-scroll'>
                {listA.map((item) => {
                    return <ExamCard key={item.id} item={item}
                                     clickHandler={clickHandler}
                                     cardType={"listA"}/>
                })}
            </div>
            <div className='!overflow-y-scroll'>
                {listB.map((item) => {
                    return <ExamCard key={item.id} item={item}
                                     clickHandler={clickHandler}
                                     cardType={'listB'}/>
                })}
            </div>
            <div className='flex col-span-2 justify-end !mt-2'>
                <button className='border border-gray-400 !px-3 !py-2 rounded bg-gray-200 '
                        onClick={submitHandler}>Submit
                </button>
            </div>
        </div>
    );
};

export default Exam;

interface ExamCardProps {
    item: ListItemType
    cardType: 'listA' | 'listB'
    clickHandler: (newItem: ListItemType, cardType: 'listA' | 'listB') => void
}

const ExamCard = ({item, cardType, clickHandler}: ExamCardProps) => {
    const {title, content, date: time} = item
    return (
        <div className={`flex-1 bg-white !p-3 !my-3 !mx-2 ${item.isNew && 'relative'}`}>
            {/*Header*/}
            <div className='flex justify-between items-center'>
                <h1 className='!text-xl !font-semibold truncate'>{title}</h1>
                <button className='border border-gray-400 !px-3 !py-2 rounded bg-gray-200 '
                        onClick={() => clickHandler(item, cardType)}
                >
                    {cardType === 'listA' ? 'ADD' : 'MINUS'}
                </button>
            </div>
            {/*body*/}
            <main className='!mt-2 h-40'>
                {content}
            </main>
            {/*footer*/}
            <div className='!mt-2 text-gray-400 !font-light'>
                {formatTimeStamp(time)}
            </div>
            {item.isNew ?
                <div
                    className='absolute right-0 bottom-0 bg-red-500 text-white !px-2 !py-1 !text-xs'>NEW</div> : null}
        </div>
    )
}