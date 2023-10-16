import TabsBox from "../common/TabsBox";

const TabsSection = () => {
    const items = [
        {
            title: "title 1",
            content: "<b>Content 1:-</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            title: "title 2",
            content: "<b>Content 2:-</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            title: "title 3",
            content: "<b>Content 3:-</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];

    return (
        <section className="block mb-4 pb-6">
            <TabsBox items={items} itemIndex={0} />
        </section>
    );
}
export default TabsSection;
