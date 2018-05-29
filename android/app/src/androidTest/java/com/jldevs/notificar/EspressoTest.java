package com.jldevs.notificar;

import android.content.Context;
import android.content.Intent;
import android.support.test.InstrumentationRegistry;
import android.support.test.espresso.ViewInteraction;
import android.support.test.filters.LargeTest;
import android.support.test.runner.AndroidJUnit4;
import android.support.test.uiautomator.By;
import android.support.test.uiautomator.UiDevice;
import android.support.test.uiautomator.Until;
import android.view.KeyEvent;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static android.support.test.espresso.Espresso.onView;
import static android.support.test.espresso.action.ViewActions.click;
import static android.support.test.espresso.action.ViewActions.replaceText;
import static android.support.test.espresso.action.ViewActions.typeText;
import static android.support.test.espresso.matcher.ViewMatchers.isDisplayed;
import static android.support.test.espresso.matcher.ViewMatchers.withContentDescription;
import static android.support.test.espresso.matcher.ViewMatchers.withId;
import static android.support.test.espresso.matcher.ViewMatchers.withText;
import static org.hamcrest.Matchers.allOf;
import static org.hamcrest.core.IsNull.notNullValue;
import static org.junit.Assert.assertThat;

@RunWith(AndroidJUnit4.class)
@LargeTest
public class EspressoTest {

//    @ClassRule
//    public static final LocaleTestRule localeTestRule = new LocaleTestRule();
//
//    @Rule
//    public ActivityTestRule<SplashActivity> mActivityRule = new ActivityTestRule<>(
//            SplashActivity.class);
//
//    @BeforeClass
//    public static void beforeAll() {
//        Screengrab.setDefaultScreenshotStrategy(new UiAutomatorScreenshotStrategy());
//    }
//
////        Screengrab.screenshot("feed");
////        onView(withTagValue(is((Object) "facebookButton"))).perform(click());
//
//    @Test
//    public void testTakeScreenshot() {
//        try {
//            Thread.sleep(3000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//
//        ViewInteraction facebookButton = onView(allOf(withContentDescription("facebookButton"), isDisplayed()));
//        facebookButton.perform(click());
//
//        try {
//            Thread.sleep(3000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//
//        ViewInteraction facebookEmail = onView(allOf(withText("Email or Phone"), isDisplayed()));
//        facebookEmail.perform(replaceText("notificarmobile@gmail.com"));
//
//        try {
//            Thread.sleep(3000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }

    private static final String APP_PACKAGE_NAME = "com.jldevs.notificar";
    private static final int LAUNCH_TIMEOUT = 5000;
    private UiDevice device;

    

    @Before
    public void startMainActivityFromHomeScreen() {
        // Initialize UiDevice instance
        device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());

        // Start from the home screen
        device.pressHome();

        // Wait for launcher
        final String launcherPackage = device.getLauncherPackageName();
        assertThat(launcherPackage, notNullValue());
        device.wait(Until.hasObject(By.pkg(launcherPackage).depth(0)), LAUNCH_TIMEOUT);

        // Launch the app
        Context context = InstrumentationRegistry.getContext();
        final Intent intent = context.getPackageManager().getLaunchIntentForPackage(APP_PACKAGE_NAME);
        // Clear out any previous instances
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK);
        context.startActivity(intent);

        // Wait for the app to appear
        device.wait(Until.hasObject(By.pkg(APP_PACKAGE_NAME).depth(0)), LAUNCH_TIMEOUT);
    }

    @Test
    public void login() {
        assertThat(device, notNullValue());

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        ViewInteraction facebookButton = onView(allOf(withContentDescription("facebookButton"), isDisplayed()));
        facebookButton.perform(click());

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

//        ViewInteraction emailInput = onView(allOf(withText("Email or Phone"), isDisplayed()));
//        emailInput.perform(replaceText("notificarmobile@gmail.com"));
//        device.click(540, 700);
//
//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
        device.click(540, 800);
        device.pressKeyCode(KeyEvent.KEYCODE_N);
//        device.typeText("notificarmobile@gmail.com");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        device.click(540, 850);

//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        device.click(540, 1000);
    }
}
