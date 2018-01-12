import java.util.List;

public class HelloWorldTest {

	public static void main(String[] args) {

		// Make tester for this Challenge
		CommandLineStandardOutTester tester =
			new CommandLineStandardOutTester(Test::main, HelloWorldTest::approved);


		// This is called when tests are done
		tester.setResultHandler(results -> {
			// Print results
			System.out.println(tester.toJsonString());
		});

		// Run test case
		String[][] testArgs = {{}};
		tester.runTests(testArgs);
	}

	public static void approved(String[] args) {
		System.out.println("Hello World");
	}


}