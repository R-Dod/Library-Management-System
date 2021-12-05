import React, { useMemo } from "react"
import { useTable } from 'react-table'


export const BasicTable = () => {

    const columns = [
        { accessor: 'id', title: 'ID', type:'number', width: 10 },
        { accessor: 'title', title: 'Title', width: 130 },
        { accessor: 'author', title: 'Author', width: 130 },
        { accessor: 'category', title: 'Category',  width: 130 },
        { accessor: 'publisher', title: 'Publisher', width: 130 },
        { accessor: 'cost', title: 'Cost',type:'number', width: 10 },
        { accessor: 'ISBN', title: 'ISBN', width: 10 }
    ]
    const data = [
        {
          id: 100,
          title: "Oliver Twist",
          author: "Charles Dickens",
          category: "Classics",
         publisher : "Penguin",
          publisher_id : 102,
          date:"2-DEC-90",
          Description:"Orphaned at birth to labor in a workhouse, Oliver Twist is barely ten when he flees for London. There he befriends young Jack Dawkins, who educates the innocent Oliver in the ways of survival. When Jack draws Oliver into a gang of juvenile pickpockets, tutored by the unscrupulous Fagin, Oliver’s corruptive influences grow. But for a boy taught only wrong, Oliver must hold on to what he knows is right. In Oliver Twist, Charles Dickens furiously condemns the realities of nineteenth-century England and rewards those who can escape them still pure at heart.",
          cost: 2500,
          ISBN:"0-3646-7486-5"
        },
        {
          id: 101,
          title: "Emma",
          author: "Jane Austen",
          category: "Classics",
         publisher : "Oxford",
          publisher_id : 103,
          date:"2-DEC-80",
          Description:"Beautiful, clever, and rich, Emma Woodhouse is perfectly content with her single life and sees no need for neither love nor marriage. However, nothing delights her more than interfering in the romantic lives of others. But when she ignores the warnings of her good friend, Mr. Knightley and attempts to arrange a suitable match for her protégée, Harriet Smith, her carefully laid plans soon unravel and have consequences that she never expected.",
          cost: 2500,
          ISBN:"0-6465-6628-8"
        },
        {
          id: 102,
          title: "Introduction to Database Systems",
          author: "Abraham Silberschatz, Henry Korth",
          category: "Educational",
         publisher : "Penguin",
          publisher_id : 102,
          date:"2-DEC-80",
          Description:"Database System Concepts by Silberschatz, Korth and Sudarshan is now in its 7th edition and is one of the cornerstone texts of database education. It presents the fundamental concepts of database management in an intuitive manner geared toward allowing students to begin working with databases as quickly as possible. The text is designed for a first course in databases at the junior/senior undergraduate level or the first year graduate level. It also contains additional material that can be used as supplements or as introductory material for an advanced course. Because the authors present concepts as intuitive descriptions, a familiarity with basic data structures, computer organization, and a high-level programming language are the only prerequisites. Important theoretical results are covered, but formal proofs are omitted. In place of proofs, figures and examples are used to suggest why a result is true.",
          cost: 2500,
          ISBN:"0-2706-6177-8"
        },
          
        {
          id: 103,
          title: "Artificial Intelligence",
          author: "Stuart Russell and Peter Norvig",
          category: "Educational",
         publisher : "Penguin",
          publisher_id : 102,
          date:"2-DEC-99",
          Description:"The most comprehensive, up-to-date introduction to the theory and practice of artificial intelligence. The long-anticipated revision of Artificial Intelligence: A Modern Approach explores the full breadth and depth of the accessor of artificial intelligence (AI). The 4th Edition brings readers up to date on the latest technologies, presents concepts in a more unified manner, and offers new or expanded coverage of machine learning, deep learning, transfer learning, multiagent systems, robotics, natural language processing, causality, probabilistic programming, privacy, fairness, and safe AI.",
          cost: 2500,
          ISBN:"0-7743-9080-8"
        },
          
        {
          id: 104,
          title: "Hamlet",
          author: "William Shakespeare",
          category: "Drama",
         publisher : "Oxford",
          publisher_id : 103,
          date:"2-DEC-99",
          Description:"Hamlet is Shakespeare's most popular, and most puzzling, play. It follows the form of a 'revenge tragedy,' in which the hero, Hamlet, seeks vengeance against his father's murderer, his uncle Claudius, now the king of Denmark. Much of its fascination, however, lies in its uncertainties. Among them: What is the Ghost--Hamlet's father demanding justice, a tempting demon, an angelic messenger? Does Hamlet go mad, or merely pretend to? Once he is sure that Claudius is a murderer, why does he not act? Was his mother, Gertrude, unfaithful to her husband or complicit in his murder?",
          cost: 2500,
          ISBN:"0-1210-2219-6"
        },
          
        {
          id: 105,
          title: "Matilda",
          author: "Roald Dahl",
          category: "Comedy",
         publisher : "Puffin Books",
          publisher_id : 104,
          date:"2-DEC-80",
          Description:"Matilda is a sweet, exceptional young girl, but her parents think she's just a nuisance. She expects school to be different but there she has to face Miss Trunchbull, a kid-hating terror of a headmistress. When Matilda is attacked by the Trunchbull she suddenly discovers she has a remarkable power with which to fight back. It'll take a superhuman genius to give Miss Trunchbull what she deserves and Matilda may be just the one to do it!",
          cost: 2500,
          ISBN:"0-1048-8694-3"
        },
          
        {
          id: 106,
          title: "James and the Giant Peach",
          author: "Roald Dahl",
          category: "Comedy",
         publisher : "Puffin Books",
          publisher_id : 104,
          date:"2-DEC-80",
          Description:"After James Henry Trotter's parents are tragically eaten by a rhinoceros, he goes to live with his two horrible aunts, Spiker and Sponge. Life there is no fun, until James accidentally drops some magic crystals by the old peach tree and strange things start to happen. The peach at the top of the tree begins to grow, and before long it's as big as a house. Inside, James meets a bunch of oversized friends—Grasshopper, Centipede, Ladybug, and more. With a snip of the stem, the peach starts rolling away, and the great adventure begins!",
          cost: 2500,
          ISBN:"0-6467-5440-8"
        },
          
        {
          id: 107,
          title: "Introduction to Data Mining",
          author: "Jiawei Han , Micheline Kamber",
          category:"Educational, Data Science",
         publisher:"Scribner",
          publisher_id : 101,
          date:"2-DEC-80",
          Description:"Data Mining: Practical Machine Learning Tools and Techniques, Fourth Edition, offers a thorough grounding in machine learning concepts, along with practical advice on applying these tools and techniques in real world data mining situations. This highly anticipated fourth edition of the most acclaimed work on data mining and machine learning teaches readers everything they need to know to get going, from preparing inputs, interpreting outputs, evaluating results, to the algorithmic methods at the heart of successful data mining approaches.",
          cost: 2500,
          ISBN:"0-9781-7809-2"
        },
          
        {
          id: 108,
          title: "Star Wars",
          author:"Claudia Gray, Marc Thompson, ",category:"Science Fiction","publisher":"Del Ray",
          publisher_id : 100,
          date:"2-DEC-80",
          Description:"Obi-Wan Kenobi and Anakin Skywalker must stem the tide of the raging Clone Wars and forge a new bond as Jedi Knights in a high-stakes adventure set just after the events of Star Wars: Attack of the Clones. The Clone Wars have begun. Battle lines are being drawn throughout the galaxy. With every world that joins the Separatists, the peace guarded by the Jedi Order is slipping through their fingers. After an explosion devastates Cato Neimoidia, the jewel of the Trade Federation, the Republic is blamed and the fragile neutrality of the planet is threatened. The Jedi dispatch Obi-Wan Kenobi, one of the Order’s most gifted diplomatic minds, to investigate the crime and maintain the balance that has begun to dangerously shift. As Obi-Wan investigates with the help of a heroic Neimoidian guard, he finds himself working against the Separatists who hope to draw the planet into their conspiracy—and senses the sinister hand of Asajj Ventress in the mists that cloak the planet",
          cost: 1000,
          ISBN:"0-4446-3633-1"
        },
          
        {
          id: 109,
          title: "IT",
          author:"Stephen King",category:"Horror","publisher":"Scribner",
          publisher_id : 108,
          date:"2-DEC-80",
          Description:"Stephen King’s terrifying, classic #1 New York Times bestseller, “a landmark in American literature” (Chicago Sun-Times)—about seven adults who return to their hometown to confront a nightmare they had first stumbled on as teenagers…an evil without a name: It. Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real. They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children. Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.",
          cost: 2500,
          ISBN:"0-1788-9854-6"
        }
      ]

    const TableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = TableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => {
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => {
                             <th {...column.getHeaderProps()}>{column.render('Header')}</th>   
                            })}
                    </tr>   
                    })}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell=>{
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>                                    
                                })}
                            </tr>                            
                        )
                    })
                }

            </tbody>

        </table>
    )
}