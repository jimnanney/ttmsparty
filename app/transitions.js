
export default function(){
  this.transition(
    //this.fromRoute('people.index'),
    //this.toModel({ instanceOf: Slide }),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
