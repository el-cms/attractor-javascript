const values = [{"file_path":"lib/attractor/cli.rb","x":28,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/version.rb","x":24,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor.rb","x":19,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/calculator.rb","x":18,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/reporters/sinatra_reporter.rb","x":14,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/reporter.rb","x":10,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/calculators/js_calculator.rb","x":9,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/reporters/html_reporter.rb","x":7,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/reporters/base_reporter.rb","x":7,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/reporters/reporter.rb","x":7,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/value.rb","x":6,"y":0,"details":{},"history":[]},{"file_path":"spec/attractor_spec.rb","x":5,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/suggester.rb","x":5,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/reporters/console_reporter.rb","x":4,"y":0,"details":{},"history":[]},{"file_path":"spec/reporter_spec.rb","x":3,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/calculators/ruby_calculator.rb","x":3,"y":0,"details":{},"history":[]},{"file_path":"lib/attractor/calculators/base_calculator.rb","x":3,"y":0,"details":{},"history":[]}];

document.addEventListener('DOMContentLoaded', () => {
  const svg = scatterPlot(document.querySelector('#graph'), { values: values, displayFilenames: true });
});
